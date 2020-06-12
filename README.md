# benchmakring XML 2 JSON transformation

Following libraries are used for this benchmarking

- camaro
- fast-xml-parser
- saxophone
- slimdom-sax-parser
- xml-streamer

# payload being parsed

The XML with a JSON data embedded as a string, not a CDATA.

# number of payloads

- 7MB
- 216KB

# performance

## camaro

Parsing: 198.583ms - 261KB
Parsing: 492.743ms - 7MB

## fast-xml-parser

Parsing: 89.537ms -261KB
Parsing: 1708.371ms - 7MB

## saxophone

Parsing: 26.150ms 261KB
Parsing: 41.615ms 7MB

## slimdom-sax-parser

Parsing: 82.531ms - 261KB
Parsing: 182.581ms - 7MB

## xml-streamer

Parsing: 60.090ms - 7MB
Parsing: 11.216ms -261KB
