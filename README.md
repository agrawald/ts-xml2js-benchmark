# benchmarking XML 2 JSON transformation libraries

## XML Parser

| Parser             | 7MB(ms) | 261MB(ms) |
| ------------------ | ------- | --------- |
| camaro             | 496     | 186       |
| fast-xml-parser    | 2707    | 67        |
| saxophone          | 19      | 4         |
| slimdom-sax-parser | 118     | 52        |
| xml-streamer       | 66      | 7         |
| xml-stream         | 69      | 69        |
| xml2json           | 99      | 9         |
| jxon               | 71      | 8         |
| xmlmapper          | 64      | 9         |

## JSON Parser

| Parser               | 7MB(ms) | 261MB(ms) |
| -------------------- | ------- | --------- |
| JSONStream           | 767     | 46        |
| minipass-json-stream | 886     | 56        |
| stream-json          | 1817    | 106       |
| jsonstream2          | 946     | 53        |
| big-json             | 888     | 105       |
| simdjson             | 79      | 3.6       |
| fast-json-parse      | 214     | 5.5       |
| fast-json-parser     | 414     | 104       |

# payload being parsed

The XML with a JSON data embedded as a string, not a CDATA.

# number of payloads

- 7MB
- 216KB
