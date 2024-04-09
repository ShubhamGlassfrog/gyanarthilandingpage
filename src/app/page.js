import Image from "next/image";
import Header from "@/Components/Header/Header";
import Main from "@/Components/Main/Main";
import Placement from "@/Components/Placement/Placement"
import Whygyanarthi from "@/Components/Whygyanarthi/Whygyanarthi";

import Footer from "@/Components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Placement />

      <Whygyanarthi />
      <Footer />


    </>
  );
}
