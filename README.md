# benchmakring XML 2 JSON transformation

Following libraries are used for this benchmarking

- camaro
- fast-xml-parser
- saxophone
- slimdom-sax-parser
- xml-streamer
- xml-stream

# payload being parsed

The XML with a JSON data embedded as a string, not a CDATA.

# number of payloads

- 7MB
- 216KB

# performance

## camaro

- Parsing: 526.674ms 261KB
- Parsing: 1958.413ms 7MB

## fast-xml-parser

- Parsing: 89.537ms -261k
- Parsing: 2270.872ms - 7M

## saxophone

- Parsing: 131.673ms 261k
- Parsing: 1415.928ms 7m

## slimdom-sax-parser

- Parsing: 134.926ms 261KB
- Parsing: 895.082ms 7MB

## xml-streamer

- Parsing: 113.859ms - 261KB
- Parsing: 953.946ms - 7MB

## xml-stream

- Parsing: 147.483ms 261KB
- Parsing: 1764.174ms 7MB
