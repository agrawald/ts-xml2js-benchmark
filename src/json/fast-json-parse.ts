import fs from "fs";
const parse = require("fast-json-parse");

export function fastJsonParse(fileName: string) {
  return parse(fs.readFileSync(fileName));
}
