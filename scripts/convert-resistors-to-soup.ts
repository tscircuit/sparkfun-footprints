import * as fs from "fs/promises"
import { parseEagleXML } from "@tscircuit/eagle-xml-converter"

async function main(){
  const resistorXml = (await fs.readFile("./tmp-sparkfun-repo/SparkFun-Resistors.lbr")).toString()
    
  console.log(parseEagleXML(resistorXml).library.packages[0])

}

main()