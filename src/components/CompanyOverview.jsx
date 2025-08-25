'use client'
import Image from "next/image";
import { motion } from "framer-motion";

// components/CompanyOverview.tsx
export default function CompanyOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-black text-white py-12 md:py-20  mb-12 md:mb-20">
      <div className="max-w-7xl mx-auto  px-6 lg:px-8  text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-12 md:mb-16"
        >
          Leading Boiler Manufacturing & Services Company
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants}>
            <div className="flex justify-center mb-4">
              <div className="border border-white rounded-full p-4 items-center flex justify-center bg-[#DC2621]">
                <Image
                  className=""
                  src="/assets/boiler-icon.svg"
                  alt="sales"
                  height={46}
                  width={46}
                />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              End to End Boiler Solutions
            </h3>
            <p className="text-sm md:text-base">
              From IBR to Thermic Fluid Systems and Hot Air Generators, EPE
              meets all boiler manufacturing requirements with reliability and
              precision.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="flex justify-center mb-4 ">
              <div className="border border-white rounded-full p-4 items-center flex justify-center bg-[#DC2621]">
                <Image
                  src="/assets/certificate-icon.svg"
                  alt="sales"
                  height={46}
                  width={46}
                />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Comprehensive Compliance
            </h3>
            <p className="text-sm md:text-base">
              As a certified partner, EPE ensures complete compliance with IBR
              norms, documentation, training, and safe operational standards.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="flex justify-center mb-4">
              <div className="border border-white rounded-full p-4 items-center flex justify-center bg-[#DC2621]">
                <Image
                  className=""
                  src="/assets/sales-icon.svg"
                  alt="sales"
                  height={46}
                  width={46}
                />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              After Sales Support & Spares
            </h3>
            <p className="text-sm md:text-base">
              EPE ensures 24/7 prompt maintenance, upgrades, and spare part
              management for maximum uptime and customer satisfaction.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}