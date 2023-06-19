import * as fs from "fs/promises"
import { parseEagleXML } from "@tscircuit/eagle-xml-converter"
import { convertSmdToElm } from "../src/convert-package-to-soup"
import { logSoup } from "@tscircuit/log-soup"

async function main() {
  // Get all the lbr files in the tmp-sparkfun-repo directory
  const lbrFiles = await fs.readdir("./tmp-sparkfun-repo")

  // Create the tmp-sparkfun-repo/json directory if it doesn't already exist
  await fs.mkdir("./tmp-sparkfun-repo/json", { recursive: true })

  // Iterate over lbr files, reading into memory
  for (const lbrFileName of lbrFiles) {
    const eagleXml = (
      await fs.readFile(`./tmp-sparkfun-repo/${lbrFileName}`)
    ).toString()
    const parsedEagle = parseEagleXML(eagleXml)
    const lbrFileNameWoExtension = lbrFileName.replace(/\.[^/.]+$/, "")
    await fs.writeFile(
      `tmp-sparkfun-repo/json/${lbrFileNameWoExtension}.json`,
      JSON.stringify(parsedEagle, null, "  ")
    )
  }

  // const numToLayerNameMap = {}

  // const top_layer = parsedEagle.layers.find((layer) => layer.name === "Top")

  // for (const layer of parsedEagle.layers) {
  //   numToLayerNameMap[layer.number] = layer.name.toUpperCase()
  // }

  // // console.log(numToLayerNameMap);

  // const comp = parsedEagle.library.packages[0]

  // const soup = comp.smd.map((cmd) => convertSmdToElm(cmd))

  // const comp_name = comp.description.split("<p><b>")?.[1].split("</b></p>")?.[0]

  // console.log(soup)
  // console.log(comp_name)
  // logSoup(`sparkfun-footprints: ${comp_name}`, soup)
}

main()
