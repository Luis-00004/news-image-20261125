// Entry for make.fun bounty news-image-20261125 (v8): copy the prebuilt
// one-day front-page image to the sandbox output directory.
// v8: top story is the Houthi CLAIM of a Ras Tanura refinery attack,
// Bailey testimony outcome, Brent $93.60. Built 26 Nov 2026.
// The image is 1024x1024, deterministic, and written by the build script.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
const size = statSync(dest).size;
if (size === 0) throw new Error("entry.png is empty after copy");
console.log(`wrote ${dest} (${size} bytes)`);
