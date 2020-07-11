import fs from "fs";
import { Readable } from "stream";
const Parser = require("xml-streamer");

export async function xmlStreamerParser(fileName: string) {
  return new Promise((resolve, rejects) => {
    const opts = {
      resourcePath: "/root/person/name",
    };
    const parser = new Parser(opts);
    const xml = fs.readFileSync(fileName, "utf-8");
    parser.parse(xml, async (err, data) => {
      if (err) {
        rejects(err);
      }
      // consume data here
      resolve(Readable.from(data[0]["_"]));
    });
  });
}
