#!/usr/bin/env node
/**
 * ADR language-pack integrity checker.
 *
 * Modes:
 *   --local   Compare files under public/ to the Driver catalog (default).
 *             No HTTP. Safe for routine CI.
 *   --live    GET every public URL, require HTTP 200, PDF MIME, size, SHA-256.
 *             Release / pre-deploy only — downloads the full archive.
 *   --probe   HEAD every URL (status + content-length). No body download.
 *
 * Usage:
 *   node scripts/validate-adr-content.mjs
 *   node scripts/validate-adr-content.mjs --live --base https://vianexis.eu
 *   node scripts/validate-adr-content.mjs --live --only hu,en
 */
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "scripts/adr-content-manifest.json");
const publicRoot = path.join(root, "public/driver-app/adr-content");

const args = new Set(process.argv.slice(2));
const mode = args.has("--live") ? "live" : args.has("--probe") ? "probe" : "local";
const baseArg = process.argv.find((a, i, all) => all[i - 1] === "--base");
const onlyArg = process.argv.find((a, i, all) => all[i - 1] === "--only");
const baseUrl = (baseArg ?? process.env.ADR_CONTENT_BASE_URL ?? "https://vianexis.eu")
  .replace(/\/$/, "");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const onlyCodes = new Set(
  (onlyArg ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean),
);
const files = onlyCodes.size
  ? manifest.files.filter((f) => onlyCodes.has(f.languageCode.toLowerCase()))
  : manifest.files;

function sha256File(filePath) {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    createReadStream(filePath)
      .on("data", (chunk) => hash.update(chunk))
      .on("error", reject)
      .on("end", () => resolve(hash.digest("hex")));
  });
}

async function sha256Response(response) {
  const hash = createHash("sha256");
  let bytes = 0;
  for await (const chunk of response.body) {
    bytes += chunk.length;
    hash.update(chunk);
  }
  return { sha256: hash.digest("hex"), bytes };
}

function isPdfMime(value) {
  const mime = (value ?? "").split(";")[0].trim().toLowerCase();
  return mime === "application/pdf";
}

function record(rows, file, ok, detail) {
  rows.push({ id: file.documentId, path: file.relativePath, ok, detail });
  const tag = ok ? "OK" : "FAIL";
  console.log(`${tag}  ${file.documentId}  ${detail}`);
}

async function validateLocal(file, rows) {
  const localPath = path.join(publicRoot, file.relativePath);
  try {
    const { size } = await stat(localPath);
    if (size !== file.fileSizeBytes) {
      record(rows, file, false, `size ${size} != manifest ${file.fileSizeBytes}`);
      return;
    }
    const sha = await sha256File(localPath);
    if (sha !== file.checksumSha256) {
      record(rows, file, false, `sha256 ${sha} != manifest ${file.checksumSha256}`);
      return;
    }
    record(rows, file, true, `${size} bytes sha256-match`);
  } catch (error) {
    record(rows, file, false, String(error));
  }
}

function publicUrl(file) {
  return `${baseUrl}${manifest.publicPrefix}/${file.relativePath}`;
}

async function validateProbe(file, rows) {
  const url = publicUrl(file);
  try {
    const response = await fetch(url, { method: "HEAD", redirect: "follow" });
    const mime = response.headers.get("content-type");
    const length = Number(response.headers.get("content-length") ?? NaN);
    const mimeOk = isPdfMime(mime);
    const sizeOk = !Number.isNaN(length) && length === file.fileSizeBytes;
    const ok = response.status === 200 && mimeOk && sizeOk;
    record(
      rows,
      file,
      ok,
      `HEAD ${response.status} mime=${mime ?? "(none)"} length=${Number.isNaN(length) ? "(none)" : length}`,
    );
  } catch (error) {
    record(rows, file, false, String(error));
  }
}

async function validateLive(file, rows) {
  const url = publicUrl(file);
  try {
    const response = await fetch(url, { method: "GET", redirect: "follow" });
    const mime = response.headers.get("content-type");
    if (response.status !== 200) {
      record(rows, file, false, `GET ${response.status} ${url}`);
      return;
    }
    if (!isPdfMime(mime)) {
      record(rows, file, false, `mime ${mime ?? "(none)"} is not application/pdf`);
      return;
    }
    const { sha256, bytes } = await sha256Response(response);
    const sizeOk = bytes === file.fileSizeBytes;
    const shaOk = sha256 === file.checksumSha256;
    const ok = sizeOk && shaOk;
    record(
      rows,
      file,
      ok,
      ok
        ? `GET 200 ${bytes} bytes sha256-match mime=${mime}`
        : `size ${bytes}/${file.fileSizeBytes} sha ${sha256}/${file.checksumSha256}`,
    );
  } catch (error) {
    record(rows, file, false, String(error));
  }
}

const rows = [];
console.log(
  `ADR content validate  mode=${mode}  files=${files.length}/${manifest.fileCount}  base=${baseUrl}\n`,
);

for (const file of files) {
  if (mode === "local") await validateLocal(file, rows);
  else if (mode === "probe") await validateProbe(file, rows);
  else await validateLive(file, rows);
}

const failed = rows.filter((r) => !r.ok);
console.log("\n--- Summary ---");
console.log(`LIVE_FILES_EXPECTED: ${files.length}`);
console.log(`LIVE_FILES_OK: ${rows.length - failed.length}`);
console.log(`LIVE_FILES_FAILED: ${failed.length}`);
if (failed.length) {
  for (const row of failed) {
    console.error(`  ${row.id}  ${row.path}  ${row.detail}`);
  }
  process.exit(1);
}
process.exit(0);
