import fs from "fs";
const JSONStream = require("JSONStream");
const Parser = require("xml-streamer");
const opts = {
  resourcePath:
    "/soapenv:Envelope/soapenv:Body/a:confirmedCircumstanceDetail/a:dataJson",
};
const parser = new Parser(opts);

function readTestXml(): string {
  // return fs.readFileSync("./test_261k.xml", "utf-8");
  return fs.readFileSync("./test_7.xml", "utf-8");
}

const xml = readTestXml();
let jsonStream = null;
console.time("Parsing");
parser.parse(xml, (err, data) => {
  // consume data here
  jsonStream = JSONStream.parse(data);
  console.timeEnd("Parsing");
  console.log(jsonStream);
});
//Parsing: 60.090ms - 7MB
//Parsing: 11.216ms -261k
