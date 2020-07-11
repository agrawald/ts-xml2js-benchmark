import fs from "fs";
import XmlStream from "xml-stream";
import { Readable } from "stream-chain";

export async function xmlStreamParser(fileName: string) {
  const stream = fs.createReadStream(fileName);
  const xml = new XmlStream(stream);
  xml.preserve("person", true);
  const item = await new Promise((resolve, reject) => {
    xml.on("endElement: person", (item) => {
      resolve(item.$text);
    });
  });

  return Promise.resolve(Readable.from(item as string));
}
