import { Package } from "@tscircuit/eagle-xml-converter";

export const convertSmdToElm = (smd: {x:number, y:number,dx:number, dy:number})=>{
  return {
    type: "pcb_smtpad",
    shape: "rect",
    x:smd.x,
    y:smd.y,
    
    
  }
}

export const convertPackageToSoup = async (pkg: Package) => {
  const soup: any[] = []
  for (const smd of pkg.smd) {
    soup.push(convertSmdToElm(smd))
  }
  return soup
};
