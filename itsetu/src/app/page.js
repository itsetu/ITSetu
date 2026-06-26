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
  metadataBase: new URL("https://yourdomain.com"), // Replace with your website URL

  title: {
    default: "iTSetu Technosoft Pvt. Ltd.",
    template: "%s | iTSetu Technosoft Pvt. Ltd.",
  },

  description:
    "iTSetu Technosoft Pvt. Ltd. specializes in IT Infrastructure, Networking, Cloud Solutions, System Integration, Software Development, ERP, Business Automation, and Managed IT Services.",

  keywords: [
    "iTSetu",
    "iTSetu Technosoft",
    "IT Infrastructure",
    "Networking",
    "Cloud Solutions",
    "Software Development",
    "ERP",
    "Business Automation",
    "Advitwala",
    "SaaS Platform",
    "Technology Consulting",
    "Network Security",
    "IT Infrastructure Company Pune"
  ],

  authors: [{ name: "iTSetu Technosoft Pvt. Ltd." }],

  creator: "iTSetu Technosoft Pvt. Ltd.",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
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
