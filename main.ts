// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence (<= 320 chars) to /output/entry.txt.
// No input, no network, no environment secrets. Node 22.18+ (type stripping).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "She can subpoena a tech CEO, grill him for six hours on encryption, and write the bill that regulates his entire industry — but the PDF on her desk is a photo of her monitor.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
