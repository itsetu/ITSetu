"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="w-full h-[50px] md:h-[100px] bg-white border-b border-gray-200 relative">

      <div className="max-w-[1400px] h-[100px] mx-auto flex items-center justify-around px-4 md:px-8">

        {/* Left Logo */}
        <div className="flex items-center mr-[0px] pl-2 md:pl-6">
         <img className="w-[140px] h-auto " src="/GTS FINAL LOGO.avif" alt="" />
        </div>

        {/* Center Menu */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-12 text-[16px] xl:text-[20px] font-medium text-black nav-animation">

          <li className="text-orange-400 cursor-pointer">
            Home
          </li>

          <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
            About us
          </li>

          <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
            Solutions
          </li>

          <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
            Career
          </li>

          <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
            Contact
          </li>

        </ul>

        {/* Right Logos */}
        <div className="hidden lg:flex items-center gap-2 lg:gap-4">

          <Image
            src="/iso.png"
            alt="Logo 1"
            width={65}
            height={65}
            className="object-contain"
          />

          <Image
            src="/iso.png"
            alt="Logo 2"
            width={65}
            height={65}
            className="object-contain"
          />

          <Image
            src="/Level3.png"
            alt="Logo 3"
            width={65}
            height={65}
            className="object-contain"
          />

        </div>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden text-black cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {
            mobileMenu ? <X size={32} /> : <Menu size={32} />
          }
        </div>

      </div>

      {/* Mobile Menu */}
      {
        mobileMenu && (
          <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white border-t border-gray-200 shadow-md z-50">

            <ul className="flex flex-col items-center gap-6 py-8 text-black text-lg font-medium">

              <li className="cursor-pointer hover:text-orange-400 transition duration-300">
                Home
              </li>

              <li className="cursor-pointer hover:text-orange-400 transition duration-300">
                About us
              </li>

              <li className="cursor-pointer hover:text-orange-400 transition duration-300">
                Solutions
              </li>

              <li className="cursor-pointer hover:text-orange-400 transition duration-300">
                Career
              </li>

              <li className="cursor-pointer hover:text-orange-400 transition duration-300">
                Contact
              </li>

            </ul>

          </div>
        )
      }

    </nav>
  );
}