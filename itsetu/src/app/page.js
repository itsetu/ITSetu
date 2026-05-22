import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Hero from "@/sections/Hero";
import WhatWeDo from "@/sections/WhatWeDo";
import InfrastructureSection from "@/sections/InfraStructure";
import AchievementSection from "@/sections/AchievementSection";


export default function Home() {
  return (
   <main className="min-h-screen bg-white">

    <Navbar></Navbar>
    <Hero></Hero>
    <WhatWeDo></WhatWeDo>
    <InfrastructureSection></InfrastructureSection>
    <AchievementSection></AchievementSection>

   </main>
  );
}
