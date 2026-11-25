// A washing machine that stopped pretending and entered its villain era.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "ERROR 404: Clean clothes not found. The washing machine has entered its villain era and is now just spinning out of spite.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
