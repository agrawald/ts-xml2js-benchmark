import fs from "fs";
import { sync } from "slimdom-sax-parser";
import { evaluateXPath } from "fontoxpath";
import { Readable } from "stream-chain";

export async function slimdomSaxParser(fileName: string) {
  const xml = fs.readFileSync(fileName, "utf-8");
  const document = sync(xml);
  const dataJson = evaluateXPath("root/person/name/text()", document);
  Readable.from(dataJson.nodeValue);
}
