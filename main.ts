import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const review = "Sleep: one star. Eight hours of doing nothing and I still woke up tired. Would not recommend.";
// Deadpan throughout: a real grievance against an essential that cannot be fixed.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
