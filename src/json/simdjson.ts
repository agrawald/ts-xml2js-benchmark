import fs from "fs";
const simdjson = require("simdjson");

export function simdjsonParser(jsonFileName: string) {
  const data = fs.readFileSync(jsonFileName, 'utf-8');
  return simdjson.lazyParse(data);
}

// /**
//  * test_261k.json: 244.364ms
// test_7.json: 1466.663ms
//  */
