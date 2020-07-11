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
    { tag: "name", name: "name" },
    { tag: "id", name: "id" },
  ];
  const pResponse = saSaxophone.subscribe(subscriptionReq);
  saSaxophone.parse();
  return await pResponse;
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
      let subscription: Subscription | null;
      this.parser.on("tagOpen", (pTag) => {
        for (const sub of request) {
          if (pTag.name === sub.tag) {
            subscription = sub;
            break;
          }
        }
      });

      this.parser.on("text", (pText) => {
        if (subscription) {
          const key = subscription.name || subscription.tag;
          if (subscription.converter) {
            response[key] = subscription.converter.convert(pText.contents);
          } else {
            response[key] = pText.contents;
          }
        }
      });

      this.parser.on("tagClose", (pTag) => {
        if (subscription && subscription.tag === pTag.name) {
          subscription = null;
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

export type Subscription = {
  tag: string;
  name?: string;
  converter?: Converter<string | object>;
};

export type SubcriptionReq = Subscription[];

export type DataType = string | object | number;

export type SubscriptionRes = {
  [name: string]: DataType;
};
