"use client";

import {
  ShieldCheck,
  Database,
  Cloud,
  MonitorSmartphone,
  ServerCog,
  Users
} from "lucide-react";

import { motion } from "framer-motion";

export default function SolutionsSection() {

  const solutions = [
    {
      icon: <ShieldCheck size={58} />,
      title: "Network and Security Practice",
      desc: "Today's enterprise networks serve a vast array of traditional and nontraditional devices."
    },
    {
      icon: <Database size={58} />,
      title: "Datacenter Practice",
      desc: "Data is a valuable commodity. Any business that collects data needs to have a secure and well-structured disaster recovery plan."
    },
    {
      icon: <Cloud size={58} />,
      title: "Cloud Practice",
      desc: "Cloud solutions are reshaping the business world from top to bottom, bringing big changes to enterprises of all sizes."
    },
    {
      icon: <MonitorSmartphone size={58} />,
      title: "Endpoint Security Practice",
      desc: "Endpoint security represents the policy-based management of security protocol over multiple network components."
    },
    {
      icon: <ServerCog size={58} />,
      title: "Managed Services",
      desc: "Gts Technosoft Managed Services is designed to handle the daily operations of your IT Infrastructure providing capability to company end-users."
    },
    {
      icon: <Users size={58} />,
      title: "Shared Services",
      desc: "Providing highly skilled professionals for software projects on a contractual basis."
    }
  ];

  return (
    <section className="
      w-full
      bg-[#e9e7e7b7]
      pt-[90px]
      pb-[100px]
    ">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          text-center
          text-[28px]
          md:text-[42px]
          text-gray-500
          font-semibold
          mb-2
        "
      >
        Solutions
      </motion.h2>

      {/* Grid Wrapper */}
      <div className="w-full flex justify-center px-10">

        <div className="
          w-full
          max-w-[1000px]
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          justify-items-center
          gap-y-24
          gap-x-8
        ">

          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
                w-full
                max-w-[260px]
                flex
                flex-col
                items-center
                text-center
              "
            >

              {/* Circle Icon */}
              <div className="
                w-[150px]
                h-[150px]
                rounded-full
                bg-[#b9b4b4]
                flex
                items-center
                justify-center
                text-[#111b6d]
                shadow-sm
                mb-8
                hover:scale-105
                transition-all
                duration-300
              ">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="
                text-[18px]
                md:text-[20px]
                font-bold
                text-[#2d2d2d]
                mb-5
                max-w-[250px]
              ">
                {item.title}
              </h3>

              {/* Description */}
              <p className="
                text-gray-500
                text-[15px]
                leading-[1.9]
                max-w-[260px]
              ">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}