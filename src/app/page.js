import Image from "next/image";
import Header from "@/Components/Header/Header";
import Main from "@/Components/Main/Main";
import Placement from "@/Components/Placement/Placement"
import Whygyanarthi from "@/Components/Whygyanarthi/Whygyanarthi";
import Ourvision from "@/Components/Ourvision/Ourvision";
import Events from "@/Components/Events/Events";
import Courses from "@/Components/Courses/Courses";
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
