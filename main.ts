import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about office life, printer flavoured.
const joke =
  "Our printer only jams when the deadline is in five minutes — it's not broken, it's middle management.";

// The bounty requires a single line of 1–200 characters. Count Unicode
// code points (not UTF-16 units or bytes) so the em dash counts once,
// and fail loudly instead of writing an out-of-range entry.
const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`joke must be 1–200 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
