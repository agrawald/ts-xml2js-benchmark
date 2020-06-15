import fs from "fs";
const xml2json = require('xml2json-node');

export async function xml2JsonNodeParser(fileName: string) {
  const xml = fs.readFileSync(fileName, "utf-8");
  return await xml2json(xml);
}

