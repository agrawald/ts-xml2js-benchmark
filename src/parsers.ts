import { bigJsonParser } from "./json/big-json";
import { jsonStreamParser } from "./json/jsonstream";
import { jsonStream2Parser } from "./json/jsonstream2";
import { minipassJsonStreamParser } from "./json/minipass-json-stream";
import { streamJsonParser } from "./json/stream-json";
import { camaroParse } from "./xml/camaro";
import { fastXmlParser } from "./xml/fastXmlParser";
import { saxophoneParser } from "./xml/saxophone";
import { slimdomSaxParser } from "./xml/slimdomSaxParser";
import { xmlStreamParser } from "./xml/xml-stream";
import { xmlStreamerParser } from "./xml/xml-streamer";
import { fastJsonParse } from "./json/fast-json-parse";
import { fastJsonParser } from "./json/fast-json-parser";
import { simdjsonParser } from "./json/simdjson";
import { xml2JsonParser } from "./xml/xml2json";
import { jxonParser } from "./xml/jxon";
import { xmlMapperParser } from "./xml/xmlmapper";

export const JsonParsers = {
  // STREAM_JSON: streamJsonParser,
  // JSON_STREAM: jsonStreamParser,
  // MINIPASS_JSON_STREAM: minipassJsonStreamParser,
  // JSON_STREAM_2: jsonStream2Parser,
  // BIG_JSON: bigJsonParser,
  // FAST_JSON_PARSE: fastJsonParse,
  // FAST_JSON_PARSER: fastJsonParser,
  // SIMDJSON_PARSER: simdjsonParser,
};

export const XmlParsers = {
  // CAMARO: camaroParse,
  // FAST_XML_PARSER: fastXmlParser,
  // SAXOPHONE: saxophoneParser,
  // SLIMDOM_SAX_PARSER: slimdomSaxParser,
  // XML_STREAM: xmlStreamParser,
  // XML_STREAMER: xmlStreamerParser,
  // XML2JSON_PARSER: xml2JsonParser,
  // JXON_PARSER: jxonParser,
  XML_MAPPER: xmlMapperParser,
};
