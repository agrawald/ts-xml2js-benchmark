import fs from "fs";
import * as parser from "fast-xml-parser";

function readTestXml(): string {
  // return fs.readFileSync("./test_261k.xml", "utf-8");
  return fs.readFileSync("./test_7.xml", "utf-8");
}

const testXmlStr = readTestXml();
console.time("Parsing");
const jsonObj = parser.parse(testXmlStr, {});
console.timeEnd("Parsing");
console.log(jsonObj);
//Parsing: 89.537ms -261k
//XMLParsing: 1708.371ms - 7M
