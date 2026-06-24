import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Extraone from "@/components/Extraone";
import Extratwo from "@/components/Extratwo";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Extraone></Extraone>
      <Extratwo></Extratwo>
    </div>
  );
}
