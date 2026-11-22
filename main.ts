// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to /output/entry.txt.
// Node 22, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The third drawer in the kitchen opens a finger's width every night. " +
  "Inside: a spoon, a rubber band, and a folded note no one remembers " +
  "writing. It says: not yet. Each morning the drawer is closed again, " +
  "the note more creased \u2014 as if someone has been reading it in the dark.";

// The text must stay within 1-280 Unicode code points; refuse to write
// anything outside that range rather than submit an invalid entry.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} code points, must be 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
