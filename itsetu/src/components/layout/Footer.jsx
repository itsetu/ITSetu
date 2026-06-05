import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* NATIVE TRANSPARENT SPACER - Forces room above the footer background */}
      {/* If you want an even bigger gap, change h-24 to h-36 or h-40 */}
      <div className="w-full h-24 md:h-32 bg-transparent clear-both block" aria-hidden="true" />

      <footer className="w-full bg-[#fafafa] pt-12 pb-6 px-8 md:px-20 lg:px-32 xl:px-44 block clear-both">
        
        {/* INNER WRAPPER */}
        <div className="w-full mx-auto text-center">
          
          {/* TOP FOOTER - GRID */}
          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-5
            items-start
            gap-y-16
            gap-x-12
            pb-16
          ">
            {/* COLUMN 1 - Logo + Description */}
            <div className="flex flex-col items-center justify-center">
              <img
                src="/FLogo.png"
                alt="logo"
                className="w-[180px] mb-8"
              />
              <p className="
                text-gray-600
                text-[15px]
                leading-[1.8]
                max-w-[280px]
              ">
                ITSetu is a trusted IT Infrastructure and
Technology Solutions company helping businesses
transform operations through secure, scalable
and future-ready digital solutions.
              </p>
            </div>

            {/* COLUMN 2 - Opening Hours */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[18px] font-semibold text-gray-700 mb-8">
                Opening Hours
              </h3>
              <div className="flex flex-col gap-6 text-[15px] text-gray-600">
                <p>Mon - Fri: 9:30 AM - 6:00 PM</p>
                <p>Saturday: 9:30 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* COLUMN 3 - Quick Links */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[18px] font-semibold text-gray-700 mb-8">
                Quick Links
              </h3>
              <div className="flex flex-col gap-5 text-[15px] text-gray-600 items-center">
                <Link
  href="/"
  className="hover:text-[#162b80] transition-colors"
>
  Home
</Link>
                <Link
  href="/about"
  className="hover:text-[#162b80] transition-colors"
>
  About Us
</Link>
               <Link
  href="/carrer"
  className="hover:text-[#162b80] transition-colors"
>
  Career
</Link>
               <Link
  href="/contact"
  className="hover:text-[#162b80] transition-colors"
>
  Contact Us
</Link>
              </div>
            </div>

            {/* COLUMN 4 - Solutions */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[18px] font-semibold text-gray-700 mb-8">
                Solutions
              </h3>
              <div className="flex flex-col gap-5 text-[15px] text-gray-600 items-center">
                <a href="#" className="hover:text-[#162b80] transition-colors">Network and Security</a>
                <a href="#" className="hover:text-[#162b80] transition-colors">Datacenter Practice</a>
                <a href="#" className="hover:text-[#162b80] transition-colors">Cloud Practice</a>
                <a href="#" className="hover:text-[#162b80] transition-colors">Endpoint Security</a>
                <a href="#" className="hover:text-[#162b80] transition-colors">Managed Services</a>
              </div>
            </div>

            {/* COLUMN 5 - Social Media */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[18px] font-semibold text-gray-700 mb-8">
                Social Media
              </h3>
              <div className="flex flex-col items-center gap-5">
                <img src="/Facebook.avif" alt="Facebook" className="w-[36px] hover:opacity-80 cursor-pointer" />
                <img src="/LinkDin.avif" alt="LinkedIn" className="w-[36px] hover:opacity-80 cursor-pointer" />
                <img src="/whatAPP.avif" alt="WhatsApp" className="w-[36px] hover:opacity-80 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="
            pt-8
            mb-12
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            border-t
            border-gray-200
          ">
            {/* Left - Contact */}
            <div className="flex flex-col gap-2 text-gray-600 text-[15px] text-center lg:text-left">
              <p>Tel. +91 9876543210</p>
              <p>Email. info@itsetu.com</p>
            </div>

            {/* Center - Terms */}
            <div className="
              flex
              flex-wrap
              justify-center
              gap-6
              text-gray-600
              text-[15px]
              lg:mx-6
              w-full
              lg:w-auto
            ">
              <p className="cursor-pointer hover:text-[#162b80] transition-colors">Terms & Conditions</p>
              <p className="hidden sm:block text-gray-300">|</p>
              <p className="cursor-pointer hover:text-[#162b80] transition-colors">Privacy Policy</p>
              <p className="hidden sm:block text-gray-300">|</p>
              <p className="cursor-pointer hover:text-[#162b80] transition-colors">Legal Disclaimer</p>
            </div>

            {/* Right - Subscribe */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <input
                type="text"
                placeholder="Email"
                className="
                  border
                  border-gray-400
                  rounded-full
                  px-6
                  py-3
                  outline-none
                  text-center
                  w-[220px]
                  bg-transparent
                  text-[15px]
                  focus:border-[#162b80]
                  transition-colors
                "
              />
              <button className="
                bg-[#162b80]
                text-white
                h-[40px]
                w-[90px]
                px-9
                py-3
                rounded-full
                hover:scale-105
                transition-all
                duration-300
                text-[15px]
                whitespace-nowrap
              ">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="bg-[#162b80] py-5 mt-0 -mx-8 md:-mx-20 lg:-mx-32 xl:-mx-44">
          <p className="text-center text-white text-[14px] sm:text-[16px] tracking-[2px] px-4">
           © 2026 ITSetu Technologies. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}