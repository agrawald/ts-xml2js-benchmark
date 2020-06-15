import { Parser } from "fast-json-parser";
import fs from "fs";

export async function fastJsonParser(fileName: string) {
  return await Parser.parseStream(fs.createReadStream(fileName));
}
