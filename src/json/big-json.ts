import fs from "fs";
const json = require("big-json");

export async function bigJsonParser(jsonFileName: string): Promise<object> {
  return new Promise((resolve, reject) => {
    const dataStream = fs.createReadStream(jsonFileName);
    const parseStream = json.createParseStream();
    parseStream.on("data", (pojo) => {
      resolve(pojo);
    });
    dataStream.pipe(parseStream);
  });
}

/**
 * test_261k.json: 244.364ms
test_7.json: 1466.663ms
 */
