// Fix Human Sleep: Funniest Patch Note
// Writes one line of patch notes announcing that human sleep is fixed
// to /output/entry.txt, deterministically.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Fixed: humans now fall asleep on the first try \u2014 removed the 3 AM bug where your brain replays every embarrassing thing you've ever said.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

// Validation: read back and confirm the written bytes match exactly.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY + "\n") {
  throw new Error("entry.txt read-back mismatch");
}
const line = written.trim();
if (line.length < 1 || line.length > 160 || line.includes("\n")) {
  throw new Error(`entry gate failed: ${line.length} chars`);
}
