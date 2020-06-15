import fs from "fs";
const parser = require("xml2json");

export async function xml2JsonParser(fileName: string) {
  const xml = fs.readFileSync(fileName, "utf-8");
  return parser.toJson(xml);
}

