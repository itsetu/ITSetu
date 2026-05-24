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
      desc: "Modern enterprise networks require reliable connectivity and advanced security to protect users, devices and business-critical applications."
    },
    {
      icon: <Database size={58} />,
      title: "Datacenter Practice",
      desc: "We design secure and scalable datacenter solutions ensuring business continuity, high availability and disaster recovery readiness."
    },
    {
      icon: <Cloud size={58} />,
      title: "Cloud Practice",
      desc: "Cloud technologies empower businesses with flexibility, scalability and cost-effective infrastructure management across hybrid environments."
    },
    {
      icon: <MonitorSmartphone size={58} />,
      title: "Endpoint Security Practice",
      desc: "Endpoint security solutions protect laptops, desktops and devices from cyber threats through centralized monitoring and policy management."
    },
    {
      icon: <ServerCog size={58} />,
      title: "Managed Services",
      desc: "Our managed services help organizations maintain, monitor and optimize their IT infrastructure with proactive support and operational excellence."
    },
    {
      icon: <Users size={58} />,
      title: "Shared Services",
      desc: "We provide highly skilled technology professionals and support teams for software projects and enterprise IT operations."
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