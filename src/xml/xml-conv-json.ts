const xmlConvJson = require("xml-conv-json");

import fs from "fs";

export function fastXmlParser(fileName: string) {
  const xml = fs.readFileSync(fileName, "utf-8");
  return xmlConvJson.parseXML(xml);
}
