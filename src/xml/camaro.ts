import { transform } from "camaro";
import fs from "fs";

const template = [
  "soapenv:Envelope/soapenv:Body/a:confirmedCircumstanceDetail",
  {
    inputRefId: "a:inputRefId",
    dataJson: "a:dataJson",
  },
];

export async function camaroParse(fileName: string): Promise<any> {
  const xml = fs.readFileSync(fileName, "utf-8");
  return await transform(xml, template);
}

/**
 * 261k
XMLParsing: 215.734ms
JSONParsing: 256.853ms
Parsing: 526.674ms
7MB
XMLParsing: 554.814ms
JSONParsing: 1400.385ms
Parsing: 1958.413ms
 */
