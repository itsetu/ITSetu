import { Geist, Geist_Mono } from "next/font/google";
import { Spinnaker } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spinnaker = Spinnaker({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL("https://www.itsetu.com"),

  title: {
    default: "iTSetu Technosoft Pvt. Ltd.",
    template: "%s | iTSetu Technosoft Pvt. Ltd.",
  },

  description:
    "iTSetu Technosoft Pvt. Ltd. is a technology-driven company specializing in IT Infrastructure, Networking, System Integration, Cloud Solutions, Software Development, ERP, Business Automation, and Managed IT Services. We are also the creators of Advitwala, a powerful SaaS platform for system integrators and technology partners.",

  keywords: [
    "iTSetu",
    "iTSetu Technosoft",
    "IT Infrastructure",
    "Networking",
    "System Integration",
    "Cloud Solutions",
    "Managed Services",
    "Software Development",
    "ERP",
    "Business Automation",
    "Advitwala",
    "SaaS Platform",
    "Technology Consulting",
    "Network Security",
    "IT Infrastructure Company Pune",
  ],

  verification: {
    google: "eFtuAaoz8mkNag9m3DiWWtuzF0z6jnn7ve6r-YwG0UY",
  },

  openGraph: {
    title: "iTSetu Technosoft Pvt. Ltd.",
    description:
      "IT Infrastructure, Networking, Cloud Solutions, Software Development, ERP & Business Automation.",
    url: "https://www.itsetu.com",
    siteName: "iTSetu Technosoft",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "iTSetu Technosoft Pvt. Ltd.",
    },
  ],

  creator: "iTSetu Technosoft Pvt. Ltd.",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${spinnaker.className} min-h-full flex flex-col`}>
        
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}