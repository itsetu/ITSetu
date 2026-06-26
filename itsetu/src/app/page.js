import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Hero from "@/sections/Hero";
import WhatWeDo from "@/sections/WhatWeDo";
import InfrastructureSection from "@/sections/InfraStructure";
import AchievementSection from "@/sections/AchievementSection";
import SolutionsSection from "@/sections/SolutionsSection";
import StatsSection from "@/sections/StatsSection";
import PartnersSection from "@/sections/PatnersSection";
import Footer from "@/components/layout/Footer";


export const metadata = {
  title: "IT Infrastructure, Cloud Solutions & Business Automation",
  description:
    "iTSetu Technosoft Pvt. Ltd. provides IT Infrastructure, Networking, System Integration, Cloud Solutions, ERP, Software Development, Business Automation, and Managed IT Services for modern businesses.",

  openGraph: {
    title: "iTSetu Technosoft Pvt. Ltd.",
    description:
      "Technology-driven company specializing in IT Infrastructure, Networking, Cloud Solutions, ERP, Business Automation, and Software Development.",
    url: "https://www.itsetu.com",
    siteName: "iTSetu Technosoft",
    type: "website",
  },
};


export default function Home() {
  return (
   <main className="min-h-screen bg-white">



    
    <Hero></Hero>
    <WhatWeDo></WhatWeDo>
    <InfrastructureSection></InfrastructureSection>
    <AchievementSection></AchievementSection>
    <SolutionsSection></SolutionsSection>
    <StatsSection></StatsSection>
    <PartnersSection></PartnersSection>
    <Footer></Footer>

   </main>


  );
}
