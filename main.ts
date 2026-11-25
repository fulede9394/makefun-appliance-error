// A washing machine that stopped pretending and entered its villain era.
// ERROR 404: clean clothes not found. The spin cycle is now a threat.
import { mkdir, open } from "node:fs/promises";
import { join } from "node:path";

const errorNote =
  "ERROR 404: Clean clothes not found. The washing machine has entered its villain era and is now just spinning out of spite.";

const encoder = new TextEncoder();

async function fileError(text: string): Promise<void> {
  const bytes = encoder.encode(text);
  if (bytes.length > 200) throw new Error("error note exceeds the limit");
  if (!text.startsWith("ERROR 404")) throw new Error("error note lost its code");
  if (!text.includes("villain era")) throw new Error("error note lost its era");
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  await mkdir(folder, { recursive: true });
  const handle = await open(join(folder, "entry.txt"), "w");
  try {
    await handle.write(bytes);
  } finally {
    await handle.close();
  }
}

void fileError(errorNote);
