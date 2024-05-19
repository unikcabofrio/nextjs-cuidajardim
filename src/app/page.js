import TopMenu from "@/view/TopMenu";
import Home from "@/view/home";
import Serviços from "@/view/service";
import Preços from "@/view/price";
import Galeria from "@/view/photo";
import FAQ from "@/view/faq";
import Contato from "@/view/contact";

import { Section1, Section2, Section3, Section4 } from "@/view/sections";

export default function Page() {
  return (
    <>
      <TopMenu/>
      <Home/>
      <Serviços/>

      <Section2/>
      <Preços/>

      {/* <Section3/> */}
      <Galeria/>

      <Section4/>
      <FAQ/>

      <Section1/>
      <Contato/>
    </>

  );
}
