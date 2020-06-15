import fs from "fs";
import { Saxophone } from "saxophone-ts";

export async function saxophoneParser(fileName: string): Promise<any> {
  return new Promise((resolve, rejects) => {
    const xml = fs.readFileSync(fileName, "utf-8");
    const parser = new Saxophone();
    let found = false;

    parser.on("tagOpen", (tag) => {
      if (tag.name === "a:dataJson") {
        found = true;
      }
    });

    parser.on("text", async (text) => {
      if (found) {
        resolve(text);
      }
    });

    parser.on("tagClose", (tag) => {
      if (tag.name === "a:dataJson") {
        found = false;
      }
    });

    parser.parse(xml);
  });
}
