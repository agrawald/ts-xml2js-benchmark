import fs from "fs";
import { parser } from "stream-json/Parser";

export async function streamJsonParser(jsonFile: string): Promise<object> {
  const pipeline = fs.createReadStream(jsonFile).pipe(parser());
  let counter = 0;
  return new Promise((resolve, reject) => {
    pipeline.on("data", (data) => {
      counter += 1;
    });
    pipeline.on("end", () => {
      resolve();
    });
  });
}

// test_261k.json: 212.458ms
// test_7.json: 1831.453ms
