import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about office life, printer flavoured.
const joke =
  "Our printer only jams when the deadline is in five minutes — it's not broken, it's middle management.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
