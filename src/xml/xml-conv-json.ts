const xmlConvJson = require("xml-conv-json");

import fs from "fs";

export function fastXmlParser(fileName: string) {
  const xml = fs.readFileSync(fileName, "utf-8");
  return xmlConvJson.parseXML(xml);
}
// Parsing: 63.537ms -261k
// Parsing: 2270.872ms - 7M
