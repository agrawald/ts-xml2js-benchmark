import fs from "fs";
const JSONStream = require("JSONStream");

export async function jsonStreamParser(jsonFileName: string): Promise<object> {
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
