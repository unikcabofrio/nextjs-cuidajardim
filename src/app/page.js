import TopMenu from "@/view/TopMenu";
import Home from "@/view/home";
import Serviços from "@/view/service";
import Preços from "@/view/price";
import Galeria from "@/view/photo";
import FAQ from "@/view/faq";
import Contato from "@/view/contact";

export default function Page() {
  return (
    <>
      <TopMenu/>
      <Home/>
      <Serviços/>
      <Preços/>
      <Galeria/>
      <FAQ/>
      <Contato/>
    </>

  );
}
