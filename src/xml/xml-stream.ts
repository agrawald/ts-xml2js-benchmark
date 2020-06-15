import fs from "fs";
import XmlStream from "xml-stream";
import { Readable } from "stream-chain";

const stream = fs.createReadStream("test_7.xml");

export async function xmlStreamParser(fileName: string) {
  const xml = new XmlStream(stream);
  xml.preserve("a:dataJson", true);
  const item = await new Promise((resolve, reject) => {
    xml.on("endElement: a:dataJson", (item) => {
      resolve(item.$text);
    });
  });

  return Promise.resolve(Readable.from(item as string));
}
// Parsing: 147.483ms 261k
// XML: 116.460ms
// JSON: 836.190ms
// Parsing: 962.817ms 7m
