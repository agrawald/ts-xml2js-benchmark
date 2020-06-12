import fs from "fs";
import { transform } from "camaro";
const JSONStream = require("JSONStream");

function readTestXml(): string {
  // return fs.readFileSync("./test_261k.xml", "utf-8");
  return fs.readFileSync("./test_7.xml", "utf-8");
}

const testXmlStr = readTestXml();
const template = [
  "soapenv:Envelope/soapenv:Body/a:confirmedCircumstanceDetail",
  {
    inputRefId: "a:inputRefId",
    dataJson: "a:dataJson",
  },
];

async function camaroParse(): Promise<any> {
  return await transform(testXmlStr, template);
}

function parseJson(xmlAsJson: string): void {
  return JSONStream.parse(xmlAsJson);
}

(async function (): Promise<void> {
  console.time("Parsing");

  console.time("XMLParsing");
  const xmlAsJson = await camaroParse();
  console.timeEnd("XMLParsing");

  console.time("JSONParsing");
  const jsonObj = parseJson(xmlAsJson["dataJson"]);
  console.timeEnd("JSONParsing");
  console.timeEnd("Parsing");

  // console.info(jsonObj);
})();

/**
 * 261k
XMLParsing: 169.300ms
JSONParsing: 7.242ms
Parsing: 198.583ms
7MB
XMLParsing: 482.101ms
JSONParsing: 7.237ms
Parsing: 492.743ms
 */
