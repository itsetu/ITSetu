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
    "IT Infrastructure Company Pune",
  ],

  verification: {
    google: "eFtuAaoz8mkNag9m3DiWWtuzF0z6jnn7ve6r-YwG0UY",
  },

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