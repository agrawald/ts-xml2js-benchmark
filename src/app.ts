import fs from "fs";
import { Saxophone } from "saxophone-ts";
const JSONStream = require("JSONStream");

const parser = new Saxophone();
let found = false;
let json = null;

parser.on("tagOpen", (tag) => {
  console.log(tag.name);
  if (tag.name === "a:dataJson") {
    found = true;
  }
});

parser.on("text", (text) => {
  if (found) {
    json = JSONStream.parse(text.contents);
  }
});

parser.on("tagClose", (tag) => {
  if (tag.name === "a:dataJson") {
    found = false;
  }
});

// Called when we are done parsing the document
parser.on("finish", () => {
  console.timeEnd("Parsing");
});

function readTestXml(): string {
  // return fs.readFileSync("./test_261k.xml", "utf-8");
  return fs.readFileSync("./test_7.xml", "utf-8");
}

console.time("Parsing");
parser.parse(readTestXml());
console.log(json);
//Parsing: 26.150ms 261k
//Parsing: 41.615ms 7m
