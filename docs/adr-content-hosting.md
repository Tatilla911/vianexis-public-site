# ADR on-demand language-pack hosting

**Public root:** https://vianexis.eu/driver-app/adr-content/{relativePath}  
**Driver catalog commit:** `8a147dc`  
**Hosted files:** 49 Driver-consumable PDFs (20 reference books + 29 written instructions)  
**Not hosted:** tunnel/source-evidence PDF (`assets/adr/tunnels/source/…`)

## URL contract

Driver builds `{cdnBaseUrl}/{relativePath}` with

`cdnBaseUrl = https://vianexis.eu/driver-app/adr-content`

Examples:

- https://vianexis.eu/driver-app/adr-content/adr/books/hu/adr_book.pdf
- https://vianexis.eu/driver-app/adr-content/adr/written_instructions/English_2017.pdf

Do not rename files. Checksums and paths are pinned in the Driver catalog.

## Delivery

Static files under `public/driver-app/adr-content/`. Served over HTTPS with `Content-Type: application/pdf`. No authentication. Directory listings are not enabled; the prefix without a filename is a locale 404, not an index.

## Caching

Filenames are **not** content-hashed. A catalog checksum change can reuse the same URL, so caches are not `immutable`.

```
Cache-Control: public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800
```

Browser/CDN may reuse bytes for up to 24 hours. After an in-place PDF replacement, purge the Vercel cache or wait for `s-maxage`. Driver rejects a stale body via SHA-256.

There is no hosted mutable manifest JSON. Catalog metadata lives in the Driver app.

## Validation

```bash
npm run adr:validate          # local size + sha256 (CI-safe)
npm run adr:validate:live     # GET every public URL (release / pre-deploy)
```

Re-copy from the Driver source archive:

```bash
DRIVER_ROOT=/path/to/driver npm run adr:sync
```

## Size

About **288 MB**. Within Vercel Pro static-upload limit (1 GB). Hobby CLI static upload is 100 MB and would fail. If this tree grows past the host limit, move it to object storage/CDN instead of forcing it into the Next.js deployment.
