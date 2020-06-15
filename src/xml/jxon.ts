import fs from "fs";
const jxon = require("jxon");

export async function jxonParser(fileName: string) {
  const xml = fs.readFileSync(fileName, "utf-8");
  return jxon.stringToJs(xml);
}

