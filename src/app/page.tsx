import Image from "next/image";
import HomePage from "../components/homePage";
import Navbar from "../components/navbar";
import Services from "../components/services";
export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Services />
    </>
  );
}
