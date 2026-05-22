"use client";

import { motion } from "framer-motion";

export default function AchievementSection() {

  return (

    <>

      {/* TOP BLUE SECTION */}
      <section className="relative w-full h-[220px] overflow-visible">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/achievementBg.avif')"
          }}
        >

        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#001a66]/80"></div>

        {/* Heading */}
        <div className="
          relative z-10
          flex
          justify-center
          pt-10
        ">

          <motion.h2

            initial={{ opacity: 0, x: -120 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}

            className="
              text-white
              text-[22px]
              md:text-[38px]
              font-semibold
            "
          >

            Why GTS TECHNOSOFT

          </motion.h2>

        </div>

        {/* Cards */}
        <div className="
          absolute
          left-1/2
          -translate-x-1/2

          bottom-[-110px]

          z-20

          flex
          gap-8
        ">

          {/* CARD 1 */}
          <motion.div

            initial={{
              opacity: 0,
              scale: 0.3,
              y: 120
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }}

            transition={{
              duration: 0.8,
              type: "spring",
              delay: 0.1
            }}

            viewport={{ once: true }}

            className="
              w-[220px]
              h-[220px]

              bg-[#f8f8f8]

              rounded-[38px]

              shadow-[0_8px_20px_rgba(0,0,0,0.12)]

              p-[14px]
            "
          >

            <div className="
              relative
              w-full
              h-full

              rounded-[32px]

              border-[5px]
              border-[#d0d0d0]

              flex
              flex-col
              items-center
              justify-center

              overflow-visible
            ">

              <div className="
                absolute
                top-[6px]
                right-[6px]

                w-[55px]
                h-[165px]

                border-r-[6px]
                border-t-[6px]

                border-[#b48ae5]

                rounded-tr-[40px]
                rounded-br-[40px]
              ">

              </div>

              <h3 className="
                text-[56px]
                font-bold
                text-[#1d2f7a]
                mb-4
                relative z-10
              ">

                6

              </h3>

              <p className="
                text-center
                text-[18px]
                text-[#1d2f7a]
                leading-[1.5]
                relative z-10
              ">

                PAN India Offices

              </p>

            </div>

          </motion.div>

          {/* CARD 2 */}
          <motion.div

            initial={{
              opacity: 0,
              scale: 0.3,
              y: 120
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }}

            transition={{
              duration: 0.8,
              type: "spring",
              delay: 0.3
            }}

            viewport={{ once: true }}

            className="
              w-[220px]
              h-[220px]

              bg-[#f8f8f8]

              rounded-[38px]

              shadow-[0_8px_20px_rgba(0,0,0,0.12)]

              p-[14px]
            "
          >

            <div className="
              relative
              w-full
              h-full

              rounded-[32px]

              border-[5px]
              border-[#d0d0d0]

              flex
              flex-col
              items-center
              justify-center

              overflow-visible
            ">

              <div className="
                absolute
                top-[6px]
                right-[6px]

                w-[55px]
                h-[165px]

                border-r-[6px]
                border-t-[6px]

                border-[#67e0d0]

                rounded-tr-[40px]
                rounded-br-[40px]
              ">

              </div>

              <h3 className="
                text-[56px]
                font-bold
                text-[#1d2f7a]
                mb-4
                relative z-10
              ">

                24/7

              </h3>

              <p className="
                text-center
                text-[18px]
                text-[#1d2f7a]
                leading-[1.5]
                relative z-10
              ">

                Support

              </p>

            </div>

          </motion.div>

          {/* CARD 3 */}
          <motion.div

            initial={{
              opacity: 0,
              scale: 0.3,
              y: 120
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }}

            transition={{
              duration: 0.8,
              type: "spring",
              delay: 0.5
            }}

            viewport={{ once: true }}

            className="
              w-[220px]
              h-[220px]

              bg-[#f8f8f8]

              rounded-[38px]

              shadow-[0_8px_20px_rgba(0,0,0,0.12)]

              p-[14px]
            "
          >

            <div className="
              relative
              w-full
              h-full

              rounded-[32px]

              border-[5px]
              border-[#d0d0d0]

              flex
              flex-col
              items-center
              justify-center

              overflow-visible
            ">

              <div className="
                absolute
                top-[6px]
                right-[6px]

                w-[55px]
                h-[165px]

                border-r-[6px]
                border-t-[6px]

                border-[#67b7e8]

                rounded-tr-[40px]
                rounded-br-[40px]
              ">

              </div>

              <h3 className="
                text-[56px]
                font-bold
                text-[#1d2f7a]
                mb-4
                relative z-10
              ">

                100+

              </h3>

              <p className="
                text-center
                text-[18px]
                text-[#1d2f7a]
                leading-[1.5]
                relative z-10
              ">

                Qualified Team

              </p>

            </div>

          </motion.div>

          {/* CARD 4 */}
          <motion.div

            initial={{
              opacity: 0,
              scale: 0.3,
              y: 120
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }}

            transition={{
              duration: 0.8,
              type: "spring",
              delay: 0.7
            }}

            viewport={{ once: true }}

            className="
              w-[220px]
              h-[220px]

              bg-[#f8f8f8]

              rounded-[38px]

              shadow-[0_8px_20px_rgba(0,0,0,0.12)]

              p-[14px]
            "
          >

            <div className="
              relative
              w-full
              h-full

              rounded-[32px]

              border-[5px]
              border-[#d0d0d0]

              flex
              flex-col
              items-center
              justify-center

              overflow-visible
            ">

              <div className="
                absolute
                top-[6px]
                right-[6px]

                w-[55px]
                h-[165px]

                border-r-[6px]
                border-t-[6px]

                border-[#ef7aa7]

                rounded-tr-[40px]
                rounded-br-[40px]
              ">

              </div>

              <h3 className="
                text-[56px]
                font-bold
                text-[#1d2f7a]
                mb-4
                relative z-10
              ">

                13+

              </h3>

              <p className="
                text-center
                text-[18px]
                text-[#1d2f7a]
                leading-[1.5]
                relative z-10
              ">

                Years of Experience

              </p>

            </div>

          </motion.div>

        </div>

      </section>

     {/* BOTTOM WHITE SECTION */}
<section className="
  w-full
  h-[300px]
  bg-[#f5f5f5]

  flex
  items-center
  justify-center
">

  <p className="
    text-center
    

    text-gray-600

    text-[18px]
    md:text-[18px]

    font-medium

   pt-[170px]
  ">

    Our award winning and the world changing <br />
    hall of facts and figures.

  </p>

</section>

    </>

  );

}