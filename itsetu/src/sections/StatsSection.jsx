"use client";

import { motion } from "framer-motion";

export default function StatsSection() {

  const stats = [
    { number: "500+", text: "Satisfied Customers" },
    { number: "100+", text: "Products and solutions" },
    { number: "50+", text: "Certified Experts" },
    { number: "200+", text: "Successful Projects" }
  ];

  return (
    <section className="
      relative
      w-full
      min-h-[220px]
      overflow-hidden
    ">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/NewBackground8.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="
        relative
        z-10
        w-full
        min-h-[250px]
        flex
        items-center
        justify-center
        px-10
        py-16
      ">

        {/* Stats Grid */}
        <div className="
          w-full
          max-w-[1100px]
          grid
          grid-cols-2
          lg:grid-cols-4
          place-items-center
          gap-y-12
          gap-x-12
          text-center
        ">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="
                flex
                flex-col
                items-center
                hover:scale-105
                transition-all
                duration-300
              "
            >
              {/* Number */}
              <h2 className="
                text-white
                text-[32px]
                md:text-[52px]
                font-bold
                mb-3
              ">
                {item.number}
              </h2>

              {/* Text */}
              <p className="
                text-white
                text-[15px]
                md:text-[18px]
                font-medium
                leading-[1.7]
              ">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}