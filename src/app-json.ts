import { JsonParsers } from "./parsers";
import { Suite } from "benchmark";
const fileName = "simple";

async function runJsonTest(key: string, file: string) {
  await JsonParsers[key](`${file}.json`);
}

const suite = new Suite();
// start the test
Object.keys(JsonParsers).forEach((key) => {
  suite.add(key, () => {
    runJsonTest(key, fileName);
  });
});

suite
  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  .on("complete", () => {
    suite.filter("fastest").map((fastest) => {
      console.log(fastest.name);
    });
  })
  .run({ async: true });
