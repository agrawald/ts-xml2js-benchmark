import { XmlParsers } from "./parsers";
import { Suite } from "benchmark";
const fileName = "simple";

async function runXmlTest(key: string, file: string) {
  await XmlParsers[key](`${file}.xml`);
}

const suite = new Suite();
// start the test
Object.keys(XmlParsers).forEach((key) => {
  suite.add(key, () => {
    runXmlTest(key, fileName);
  });
});

suite
  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  .on("complete", () => {
    suite.filter("fastest").map((fastest) => {
      console.log(`Fastest is: ${fastest.name}`);
    });
  })
  .run({
    async: true,
  });
