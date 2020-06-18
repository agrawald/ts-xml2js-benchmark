import { JsonParsers, XmlParsers } from "./parsers";
import { Performance, startPerformanceObserver } from "./utils/performance";
const fileNames = ["test_7"];

async function runJsonTest(key: string, file: string) {
  const performance = new Performance(`${file}.json`, key);
  const res = await JsonParsers[key](`${file}.json`);
  performance.measure();
  console.log(Object.keys(res));
}

async function runXmlTest(key: string, file: string) {
  const performance = new Performance(`${file}.xml`, key);
  const res = await XmlParsers[key](`${file}.xml`);
  performance.measure();
  console.log(Object.keys(res));
}

startPerformanceObserver();
// start the test
Object.keys(JsonParsers).forEach((key) => {
  for (const fileName of fileNames) {
    if (fileName) {
      runJsonTest(key, fileName);
    }
  }
});

Object.keys(XmlParsers).forEach((key) => {
  for (const fileName of fileNames) {
    if (fileName) {
      runXmlTest(key, fileName);
    }
  }
});
