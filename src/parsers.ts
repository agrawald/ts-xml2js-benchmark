import { streamJsonParser } from "./json/stream-json";
import { jsonStreamParser } from "./json/jsonstream";
import camaro from "camaro";
import { fastXmlParser } from "./xml/fastXmlParser";
import { saxophoneParser } from "./xml/saxophone";
import { slimdomSaxParser } from "./xml/slimdomSaxParser";
import { xmlStreamParser } from "./xml/xml-stream";
import { xmlStreamerParser } from "./xml/xml-streamer";
import { camaroParse } from "./xml/camaro";

export const JsonParsers = {
  STREAM_JSON: streamJsonParser,
  JSON_STREAM: jsonStreamParser,
};

export const XmlParsers = {
  CAMARO: camaroParse,
  FAST_XML_PARSER: fastXmlParser,
  SAXOPHONE: saxophoneParser,
  SLIMDOM_SAX_PARSER: slimdomSaxParser,
  XML_STREAM: xmlStreamParser,
  XML_STREAMER: xmlStreamerParser,
};
