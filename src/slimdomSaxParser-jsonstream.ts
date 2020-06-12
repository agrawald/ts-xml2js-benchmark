import fs from "fs";
const JSONStream = require("JSONStream");
import { sync } from "slimdom-sax-parser";
import { evaluateXPath } from "fontoxpath";

function readTestXml(): string {
  // return fs.readFileSync("./test_261k.xml", "utf-8");
  return fs.readFileSync("./test_7.xml", "utf-8");
}

const testXmlStr = readTestXml();

(async function (): Promise<void> {
  console.time("Parsing");
  console.time("XMLParsing");
  const document = sync(testXmlStr);
  const dataJson = evaluateXPath("*[local-name() = 'dataJson']", document);
  console.timeEnd("XMLParsing");
  console.time("JSONParsing");
  const jsonObj = JSONStream.parse(dataJson);
  console.timeEnd("JSONParsing");
  console.timeEnd("Parsing");

  console.info(jsonObj);
})();

/**
 * 261k
XMLParsing: 64.277ms
JSONParsing: 8.832ms
Parsing: 82.531ms

7m
XMLParsing: 162.278ms
JSONParsing: 9.682ms
Parsing: 182.581ms
 */
