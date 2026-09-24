#!/usr/bin/env node
/**
 * Copy Driver-catalog ADR PDFs into the public site static tree.
 *
 * Source archive (git, not Flutter assets):
 *   {DRIVER_ROOT}/assets/{relativePath}
 *
 * Public destination (must match AdrContentPolicy URL contract):
 *   public/driver-app/adr-content/{relativePath}
 *
 * Does not copy tunnel/source-evidence PDFs.
 */
import { createHash } from "node:crypto";
import { copyFile, mkdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(
  await readFile(path.join(root, "scripts/adr-content-manifest.json"), "utf8"),
);
const driverRoot =
  process.env.DRIVER_ROOT ??
  path.resolve(root, "../transdoc-driver-app-play-uat-integrated");
const destRoot = path.join(root, "public/driver-app/adr-content");

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

let copied = 0;
for (const file of manifest.files) {
  const src = path.join(driverRoot, "assets", file.relativePath);
  const dst = path.join(destRoot, file.relativePath);
  const info = await stat(src);
  if (info.size !== file.fileSizeBytes) {
    throw new Error(
      `Source size mismatch ${file.relativePath}: ${info.size} != ${file.fileSizeBytes}`,
    );
  }
  const bytes = await readFile(src);
  const digest = sha256(bytes);
  if (digest !== file.checksumSha256) {
    throw new Error(
      `Source sha256 mismatch ${file.relativePath}: ${digest} != ${file.checksumSha256}`,
    );
  }
  await mkdir(path.dirname(dst), { recursive: true });
  await copyFile(src, dst);
  copied += 1;
  console.log(`copied ${file.relativePath} (${file.fileSizeBytes} bytes)`);
}

console.log(
  `\nSynced ${copied} Driver-consumable PDFs (${(manifest.totalBytes / 1e6).toFixed(2)} MB). Tunnel source left unpublished.`,
);
