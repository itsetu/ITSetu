"use client";

import { motion } from "framer-motion";

const cards = [
  { value: "6",    label: "PAN India Offices",  accent: "#b48ae5", delay: 0.1 },
  { value: "100+", label: "Happy Customers",    accent: "#67e0d0", delay: 0.3 },
  { value: "30+",  label: "Certified Experts",  accent: "#67b7e8", delay: 0.5 },
  { value: "200+", label: "Projects Delivered", accent: "#ef7aa7", delay: 0.7 },
];

export default function AchievementSection() {
  return (
    <>
      {/* TOP BLUE SECTION */}
      <section className="relative w-full bg-cover bg-center overflow-visible pb-[140px] md:pb-[130px]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/NewBackground7.png')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#001a66]/80" />

        {/* Heading */}
        <div className="relative z-10 flex justify-center pt-10 pb-6">
          <motion.h2
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white text-[22px] md:text-[38px] font-semibold"
          >
            Why ITSetu
          </motion.h2>
        </div>

        {/* Cards — overlapping into white section below */}
        <div className="
          relative z-20
          flex flex-wrap justify-center
          gap-6 md:gap-8
          px-4 sm:px-6
          w-full
          mt-2
        ">
          {cards.map(({ value, label, accent, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.3, y: 120 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", delay }}
              viewport={{ once: true }}
              className="
                w-[160px] h-[160px]
                sm:w-[190px] sm:h-[190px]
                md:w-[220px] md:h-[220px]
                bg-[#f8f8f8]
                rounded-[28px] md:rounded-[38px]
                shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                p-[10px] md:p-[14px]
                flex-shrink-0
              "
            >
              <div className="
                relative w-full h-full
                rounded-[22px] md:rounded-[32px]
                border-[4px] md:border-[5px] border-[#d0d0d0]
                flex flex-col items-center justify-center
                overflow-hidden
              ">
                {/* Accent corner decoration */}
                <div
                  className="
                    absolute top-[5px] right-[5px]
                    w-[40px] md:w-[55px]
                    h-[120px] md:h-[165px]
                    border-r-[5px] md:border-r-[6px]
                    border-t-[5px] md:border-t-[6px]
                    rounded-tr-[36px] rounded-br-[36px]
                  "
                  style={{ borderColor: accent }}
                />

                <h3 className="
                  text-[40px] md:text-[56px]
                  font-bold text-[#1d2f7a]
                  mb-2 md:mb-4
                  relative z-10
                ">
                  {value}
                </h3>

                <p className="
                  text-center
                  text-[13px] sm:text-[15px] md:text-[18px]
                  text-[#1d2f7a]
                  leading-[1.5]
                  relative z-10
                  px-2
                ">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOTTOM WHITE SECTION */}
      <section className="
        w-full
        bg-[#f5f5f5]
        flex items-center justify-center
        px-4 sm:px-8
        pt-10 pb-12
        md:pt-16 md:pb-16
      ">
        <p className="
          text-center
          text-gray-600
          text-[15px] sm:text-[16px] md:text-[18px]
          font-medium
          max-w-2xl
          leading-relaxed
        ">
          Our award-winning solutions and customer-focused approach help businesses
          achieve reliable, secure and future-ready IT infrastructure.
        </p>
      </section>
    </>
  );
}