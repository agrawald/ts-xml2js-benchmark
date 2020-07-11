import { transform } from "camaro";
import fs from "fs";

const template = [
  "root/person",
  {
    name: "name",
    id: "id",
    age: "age",
  },
];

export async function camaroParse(fileName: string): Promise<any> {
  const xml = fs.readFileSync(fileName, "utf-8");
  return await transform(xml, template);
}
