import { JsonParsers, XmlParsers } from "./parsers";
import { Performance, startPerformanceObserver } from "./utils/performance";

startPerformanceObserver();

////////
const dataJsonFiles = ["test_261k.json", "test_7.json"];
function runJsonTest(key: string) {
  dataJsonFiles.forEach(async (file) => {
    const performance = new Performance(file, key);
    await JsonParsers[key](file);
    performance.measure();
  });
}

////////
const dataXmlFiles = ["test_261k.xml", "test_7.xml"];
function runXmlTest(key: string) {
  dataXmlFiles.forEach(async (file) => {
    const performance = new Performance(file, key);
    await XmlParsers[key](file);
    performance.measure();
  });
}

// start the test
Object.keys(JsonParsers).forEach((key) => {
  runJsonTest(key);
});

Object.keys(XmlParsers).forEach((key) => {
  runXmlTest(key);
});
