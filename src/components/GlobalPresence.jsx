"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const GlobalPresence = () => {
  return (
    <div className="px-6 lg:px-8 py-20 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold mb-4 text-center"
      >
        Global Presence
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-black mb-8 text-center"
      >
        Delivering Trusted Thermal Solutions Backed by Proven Expertise
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/global_presence_map.png"
          alt="map"
          width={1200}
          height={700}
        />
      </motion.div>
    </div>
  );
};

export default GlobalPresence;
