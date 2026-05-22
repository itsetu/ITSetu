"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (

    <nav className="
      w-full
      h-[50px]
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
        <div className="
          flex
          items-center

          mr-[0px]

          pl-2
          md:pl-6
        ">

          <img
            className="
              w-[140px]
              h-auto
            "
            src="/FLogo.png"
            alt=""
          />

        </div>

        {/* Center Menu */}
        <ul className="
          hidden
          lg:flex

          items-center

          gap-8
          xl:gap-12

          text-[16px]
          xl:text-[20px]

          font-medium
          text-black

          nav-animation
        ">

          <li className="
            text-orange-400
            cursor-pointer
          ">

            Home

          </li>

          <li className="
            hover:text-orange-400

            transition
            duration-300

            cursor-pointer
          ">

            About us

          </li>

          {/* SOLUTIONS DROPDOWN */}
          <li className="
            relative
            group

            transition
            duration-300

            cursor-pointer
          ">

            <span className="
              hover:text-orange-400

              transition-all
              duration-300
            ">

              Solutions

            </span>

            {/* DROPDOWN */}
            <div className="
              absolute

              top-[35px]
              left-1/2
              -translate-x-1/2

              pt-4

              opacity-0
              invisible

              group-hover:opacity-100
              group-hover:visible

              transition-all
              duration-300

              z-50
            ">

              <div className="
                bg-white

                shadow-xl

                min-w-[340px]
                xl:min-w-[420px]

                py-5
              ">

                <a href="#" className="
                  block

                  px-8
                  py-3

                  text-center

                  text-[16px]
                  text-black

                  hover:text-orange-400

                  transition-all
                ">

                  Network and Security Practice

                </a>

                <a href="#" className="
                  block

                  px-8
                  py-3

                  text-center

                  text-[16px]
                  text-black

                  hover:text-orange-400

                  transition-all
                ">

                  Datacenter Practice

                </a>

                <a href="#" className="
                  block

                  px-8
                  py-3

                  text-center

                  text-[16px]
                  text-black

                  hover:text-orange-400

                  transition-all
                ">

                  Cloud Practice

                </a>

                <a href="#" className="
                  block

                  px-8
                  py-3

                  text-center

                  text-[16px]
                  text-black

                  hover:text-orange-400

                  transition-all
                ">

                  Endpoint Security Practice

                </a>

                <a href="#" className="
                  block

                  px-8
                  py-3

                  text-center

                  text-[16px]
                  text-black

                  hover:text-orange-400

                  transition-all
                ">

                  Managed Services

                </a>

                <a href="#" className="
                  block

                  px-8
                  py-3

                  text-center

                  text-[16px]
                  text-black

                  hover:text-orange-400

                  transition-all
                ">

                  Shared Services

                </a>

              </div>

            </div>

          </li>

          <li className="
            hover:text-orange-400

            transition
            duration-300

            cursor-pointer
          ">

            Career

          </li>

          <li className="
            hover:text-orange-400

            transition
            duration-300

            cursor-pointer
          ">

            Contact

          </li>

        </ul>

        {/* Right Logos */}
        <div className="
          hidden
          lg:flex

          items-center

          gap-2
          lg:gap-4
        ">

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
          className="
            lg:hidden

            text-black

            cursor-pointer
          "
          onClick={() => setMobileMenu(!mobileMenu)}
        >

          {
            mobileMenu
              ? <X size={32} />
              : <Menu size={32} />
          }

        </div>

      </div>

      {/* Mobile Menu */}
      {
        mobileMenu && (

          <div className="
            lg:hidden

            absolute

            top-[80px]
            left-0

            w-full

            bg-white

            border-t
            border-gray-200

            shadow-md

            z-50
          ">

            <ul className="
              flex
              flex-col

              items-center

              gap-6

              py-8

              text-black
              text-lg

              font-medium
            ">

              <li className="
                cursor-pointer

                hover:text-orange-400

                transition
                duration-300
              ">

                Home

              </li>

              <li className="
                cursor-pointer

                hover:text-orange-400

                transition
                duration-300
              ">

                About us

              </li>

              <li className="
                cursor-pointer

                hover:text-orange-400

                transition
                duration-300
              ">

                Solutions

              </li>

              <li className="
                cursor-pointer

                hover:text-orange-400

                transition
                duration-300
              ">

                Career

              </li>

              <li className="
                cursor-pointer

                hover:text-orange-400

                transition
                duration-300
              ">

                Contact

              </li>

            </ul>

          </div>

        )
      }

    </nav>

  );

}