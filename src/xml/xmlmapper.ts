/* eslint-disable new-cap */
const Parser = require("xmlmapper");
import fs from "fs";
import { Readable } from "stream-chain";

const schema = {
  name: "person",
  path: "root.person",
  properties: [
    { name: "name", path: "name" },
    { name: "id", path: "id" },
  ],
};

export function xmlMapperParser(fileName: string) {
  const xml = fs.createReadStream(fileName);
  return new Promise((resolve, reject) => {
    const readable = Readable.from(xml);
    Parser([schema])
      .on("parsed", (name: string, object: any) => {
        resolve(object);
      })
      .parse(readable, (err: Error) => {
        if (err) {
          reject(err);
        }
      });
  });
}
// Parsing: 63.537ms -261k
// Parsing: 2270.872ms - 7M
