import fs from "fs";
import xml2json from 'xml2json-node';

export async function xml2JsonNodeParser(fileName: string) {
  const xml = fs.readFileSync(fileName, "utf-8");
  return await xml2json(xml);
}

