import * as fs from "fs/promises";
import { parseEagleXML } from "@tscircuit/eagle-xml-converter";

async function main() {
  const resistorXml = (
    await fs.readFile("./tmp-sparkfun-repo/SparkFun-Resistors.lbr")
  ).toString();

  const parsedEagle = parseEagleXML(resistorXml);

  await fs.writeFile(
    "tmp/parsed-eagle.json",
    JSON.stringify(parsedEagle, null, "  ")
  );

  const numToLayerNameMap = {};

  const top_layer = parsedEagle.layers.find((layer) => layer.name === "Top");

  for (const layer of parsedEagle.layers) {
    numToLayerNameMap[layer.number] = layer.name.toUpperCase();
  }

  // console.log(numToLayerNameMap);

  const comp = parsedEagle.library.packages[0];
  
  comp.smd

  console.log(comp);
}

main();
