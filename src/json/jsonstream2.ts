import fs from "fs";
const JSONStream = require("jsonstream2");

export async function jsonStream2Parser(jsonFileName: string): Promise<object> {
  const dataStream = fs.createReadStream(jsonFileName);
  return new Promise((resolve, reject) => {
    const jsonStream = JSONStream.parse("*");
    dataStream.pipe(jsonStream);
    jsonStream.on("data", (data) => {
      resolve(data);
    });
    jsonStream.on("error", (err) => {
      reject(err);
    });
  });
}

/**
 * test_261k.json: 244.364ms
test_7.json: 1466.663ms
 */
