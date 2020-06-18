import { rejects } from "assert";
import fs from "fs";
import { Saxophone } from "saxophone-ts";
const parse = require("fast-json-parse");

export function fastJsonParse(json: string) {
  return parse(json);
}

export class JsonConverter implements Converter<object> {
  convert(value: string): object {
    return parse(value);
  }
}

export async function saxophoneParser(fileName: string): Promise<any> {
  const xml = fs.readFileSync(fileName, "utf-8");
  const saSaxophone = new SaSaxophone(xml);
  const subscriptionReq = [
    { tag: "a:dataJson", name: "dataJson", converter: new JsonConverter() },
    { tag: "a:inputRefId", name: "cliRefId" },
  ];
  const pResponse = saSaxophone.subscribe(subscriptionReq);
  saSaxophone.parse();
  const response = await pResponse;
  console.info(Object.keys(response));
}

export class SaSaxophone extends Saxophone {
  private parser;

  constructor(private xml: string) {
    super();
    this.parser = new Saxophone();
  }

  subscribe(request: SubcriptionReq): Promise<SubscriptionRes> {
    return new Promise((resolve, reject) => {
      const response = {};
      let found: string;
      this.parser.on("tagOpen", (pTag) => {
        for (const opt of request) {
          if (pTag.name === opt["tag"]) {
            found = opt["name"] || pTag.name;
          }
        }
      });

      this.parser.on("text", (pText) => {
        if (found) {
          if (request[found]) {
            response[found] = request[found].convert(pText);
          } else {
            response[found] = pText;
          }
        }
      });

      this.parser.on("tagClose", (pTag) => {
        for (const opt of request) {
          if (pTag === opt["tag"]) {
            found = null;
          }
        }
      });

      this.parser.on("finish", () => {
        resolve(response);
      });

      this.parser.on("error", (err) => {
        rejects(err);
      });
    });
  }

  parse() {
    return this.parser.parse(this.xml);
  }
}

export interface Converter<T> {
  convert(value: string): T;
}

export type SubcriptionReq = {
  tag: string;
  name?: string;
  converter?: Converter<string | object>;
}[];

export type DataType = string | object | number;

export type SubscriptionRes = {
  [name: string]: DataType;
};
