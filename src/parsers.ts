import { streamJsonParser } from "./json/stream-json";
import { jsonStreamParser } from "./json/jsonstream";
import camaro from "camaro";
import { fastXmlParser } from "./xml/fastXmlParser";
import { saxophoneParser } from "./xml/saxophone";
import { slimdomSaxParser } from "./xml/slimdomSaxParser";
import { xmlStreamParser } from "./xml/xml-stream";
import { xmlStreamerParser } from "./xml/xml-streamer";
import { camaroParse } from "./xml/camaro";
import { minipassJsonStreamParser } from "./json/minipass-json-stream";
import { jsonStream2Parser } from "./json/jsonstream2";
import { bigJsonParser } from "./json/big-json";

export const JsonParsers = {
  // STREAM_JSON: streamJsonParser,
  // JSON_STREAM: jsonStreamParser,
  // MINIPASS_JSON_STREAM: minipassJsonStreamParser,
  // JSON_STREAM_2: jsonStream2Parser,
  BIG_JSON: bigJsonParser,
};

export const XmlParsers = {
  // CAMARO: camaroParse,
  // FAST_XML_PARSER: fastXmlParser,
  // SAXOPHONE: saxophoneParser,
  // SLIMDOM_SAX_PARSER: slimdomSaxParser,
  // XML_STREAM: xmlStreamParser,
  // XML_STREAMER: xmlStreamerParser,
};
