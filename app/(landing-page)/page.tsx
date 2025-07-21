import { Folow } from "@/components/Folow";
import Demo from "@/components/section/Demo";
import Hero from "@/components/section/Hero";
import Integration from "@/components/section/Integration";
import Pricing from "@/components/section/Pricing";
import Image from "next/image";

export default function Home() {
  return (
  <>
    <Hero/>
    <Demo/>
    <Integration/>
    <Pricing/>
  </>
  );
}
