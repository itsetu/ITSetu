"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const closeMobile = () => setMobileMenu(false);

  return (
    <nav className="
      w-full
      h-[90px]
      md:h-[100px]
      bg-white
      border-b
      border-gray-200
      relative
      z-50
    ">
      <div className="
        max-w-[1400px]
        h-[100px]
        mx-auto
        flex
        items-center
        justify-around
        px-4
        md:px-8
      ">

        {/* Left Logo */}
{/* Left Logo */}
<div className="flex items-center pl-2 md:pl-6">
  <Link href="/" onClick={closeMobile}>
    <img className="w-[140px] h-auto cursor-pointer" src="/MainLogo.png" alt="ITSetu Logo" />
  </Link>
</div>

        {/* Center Menu - Desktop */}
        <ul className="
          hidden lg:flex
          items-center
          gap-8 xl:gap-12
          text-[16px] xl:text-[20px]
          font-medium text-black
          nav-animation
        ">
          <Link href="/">
            <li className={`cursor-pointer transition duration-300 ${pathname === "/" ? "text-orange-400" : "text-black hover:text-orange-400"}`}>
              Home
            </li>
          </Link>

          <Link href="/about">
            <li className={`cursor-pointer transition duration-300 ${pathname === "/about" ? "text-orange-400" : "text-black hover:text-orange-400"}`}>
              About Us
            </li>
          </Link>

          {/* SOLUTIONS DROPDOWN */}
          <li className="relative group transition duration-300 cursor-pointer">
            <span className="hover:text-orange-400 transition-all duration-300">Solutions</span>

            <div className="
              absolute top-[35px] left-1/2 -translate-x-1/2 pt-4
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50
            ">
              <div className="bg-white shadow-xl min-w-[340px] xl:min-w-[420px] py-5">
                <Link href="/solutions/network-security" className="block px-8 py-3 text-center text-[16px] text-black hover:text-orange-400 transition-all">
                  Network and Security Practice
                </Link>
                <Link href="/solutions/storage_and_backup" className="block px-8 py-3 text-center text-[16px] text-black hover:text-orange-400 transition-all">
                  Storage & Backup
                </Link>
                <Link href="/solutions/web_and_application" className="block px-8 py-3 text-center text-[16px] text-black hover:text-orange-400 transition-all">
                  Web & Application Development
                </Link>
              </div>
            </div>
          </li>

          <Link href="/carrer">
            <li className={`cursor-pointer transition duration-300 ${pathname === "/carrer" ? "text-orange-400" : "text-black hover:text-orange-400"}`}>
              Career
            </li>
          </Link>

          <Link href="/contact">
            <li className={`cursor-pointer transition duration-300 ${pathname === "/contact" ? "text-orange-400" : "text-black hover:text-orange-400"}`}>
              Contact
            </li>
          </Link>
        </ul>

        {/* Right Logos - Desktop */}
        <div className="hidden lg:flex items-center gap-2 lg:gap-4">
          <Image src="/iso.png" alt="Logo 1" width={65} height={65} className="object-contain" />
          <Image src="/iso.png" alt="Logo 2" width={65} height={65} className="object-contain" />
          <Image src="/Level3.png" alt="Logo 3" width={65} height={65} className="object-contain" />
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden text-black cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={32} /> : <Menu size={32} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="
          lg:hidden absolute top-[90px] left-0
          w-full bg-white
          border-t border-gray-200
          shadow-md z-50
        ">
          <ul className="flex flex-col items-center gap-6 py-8 text-black text-lg font-medium">

            <Link href="/" onClick={closeMobile}>
              <li className={`cursor-pointer transition duration-300 ${pathname === "/" ? "text-orange-400" : "text-black hover:text-orange-400"}`}>
                Home
              </li>
            </Link>

            <Link href="/about" onClick={closeMobile}>
              <li className={`cursor-pointer transition duration-300 ${pathname === "/about" ? "text-orange-400" : "text-black hover:text-orange-400"}`}>
                About Us
              </li>
            </Link>

            {/* Mobile Solutions - expandable */}
            <li className="cursor-pointer hover:text-orange-400 transition duration-300 flex flex-col items-center gap-3">
              <span>Solutions</span>
              <div className="flex flex-col items-center gap-2 text-[15px] text-gray-600">
                <Link href="/solutions/network-security" onClick={closeMobile} className="hover:text-orange-400 transition-colors">
                  Network and Security Practice
                </Link>
                <Link href="/solutions/storage_and_backup" onClick={closeMobile} className="hover:text-orange-400 transition-colors">
                  Storage & Backup
                </Link>
                <Link href="/solutions/web_and_application" onClick={closeMobile} className="hover:text-orange-400 transition-colors">
                  Web & Application Development
                </Link>
              </div>
            </li>

            <Link href="/carrer" onClick={closeMobile}>
              <li className={`cursor-pointer transition duration-300 ${pathname === "/carrer" ? "text-orange-400" : "text-black hover:text-orange-400"}`}>
                Career
              </li>
            </Link>

            <Link href="/contact" onClick={closeMobile}>
              <li className={`cursor-pointer transition duration-300 ${pathname === "/contact" ? "text-orange-400" : "text-black hover:text-orange-400"}`}>
                Contact
              </li>
            </Link>

          </ul>
        </div>
      )}
    </nav>
  );
}