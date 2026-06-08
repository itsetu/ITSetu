"use client";

import { motion } from "framer-motion";

export default function InfrastructureSection() {

  return (

    <section className="relative w-full min-h-[390px] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">

        <img
          src="/BackgroundInfrastrucurre.avif"
          alt=""
          className="w-full h-full object-cover animate-smoothExpand"
        />

      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#00114d]/75"></div>

      {/* Content */}
      <motion.div

        initial={{ opacity: 0, x: -120 }}

        whileInView={{ opacity: 1, x: 0 }}

        transition={{ duration: 1.2 }}

        viewport={{ once: true }}

        className="
          relative z-10

          translate-x-[20px]
          sm:translate-x-[60px]
          md:translate-x-[140px]
          lg:translate-x-[300px]

          translate-y-[30px]
          md:translate-y-[50px]
        "
      >

        {/* Heading */}
        <h2 className="
          text-white
          text-[15px]
          sm:text-[17px]
          md:text-[20px]

          font-semibold
          mb-3
        ">

          IT Infrastructure Management Services Company

        </h2>

        {/* Yellow Line */}
        <motion.div

          initial={{ width: 0 }}

          whileInView={{ width: "500px" }}

          transition={{ duration: 1.2 }}

          viewport={{ once: true }}

          className="
            h-[3px]
            bg-yellow-400
            mb-8
          "
        >

        </motion.div>

        {/* First Paragraph */}
        <p className="
          text-white

          text-[12px]
          sm:text-[14px]
          md:text-[16px]

          leading-[2]

          max-w-[90%]
          md:max-w-[1120px]

          mb-8
          translate-y-[10px]
        ">

          We serve a diverse list of enterprises & Governments with timely
          delivery and cost efficiency by making us a trusted partner in
          the global environment. Our strategy is to ensure you transform
          the Information infrastructure to keep up with the needs of the
          enterprise business.

        </p>

        {/* Second Paragraph */}
        <p className="
          text-white

          text-[12px]
          sm:text-[14px]
          md:text-[16px]

          leading-[2]

          max-w-[90%]
          md:max-w-[1120px]

          mb-10
        ">

          IT Setu provides modern IT solutions designed to help organizations embrace digital transformation with confidence. Through our expertise in software development, cloud technologies, and IT services, we empower businesses to overcome challenges and achieve their goals efficiently.
        </p>

        {/* Button */}
        <button className="
          bg-white
          text-black

          w-[120px]
          md:w-[170px]

          h-[40px]
          md:h-[50px]

          rounded-[12px]

          text-[14px]
          md:text-[18px]

          font-medium

          hover:scale-105
          transition-all
          duration-300

          translate-y-[20px]
          md:translate-y-[40px]
        ">

          Read More

        </button>

      </motion.div>

    </section>

  );

}