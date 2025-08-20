"use client";

import { delay, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { LiaCertificateSolid } from "react-icons/lia";

const services = [
  {
    title: "IBR Boiler Manufacture License",
    description:
      "We successfully cope with of varying complexity, provide long-term guarantees",
    icon: "/assets/about/certificates/ibr_boiler.webp",
  },
  {
    title: "IBR Boiler Repairing License",
    description:
      "We successfully cope with of varying complexity, provide long-term guarantees",
    icon:  "/assets/about/certificates/ibr_pipeline_fabrication.png",
  },
  {
    title: "IBR Fabrication License",
    description:
      "We successfully cope with of varying complexity, provide long-term guarantees",
    icon: "/assets/about/certificates/ibr_boiler_repairing.webp",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger when 20% of the element is in view

  // Define a container variant to manage the staggering of children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2, // This will delay the start of the container's animation
        staggerChildren: 1

      },
    },
  };

  // Define the variant for the individual card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 100 }, // Start from 100px below and invisible
    visible: {
      opacity: 1,
      y: -50, // Animate to original position (y: 0) and fully visible
      transition: {
        type: "easeIn",
        duration: 0.3,
      },
    },
  };

  return (
    <section className="pb-16 sm:pb-20 bg-white text-center max-w-7xl mx-auto px-6 lg:px-8">
      <div ref={ref}>
        {" "}
        {/* Attach the ref to a parent container */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
          Certifications
        </h2>
        <p className="max-w-7xl mx-auto mb-6 md:mb-8 text-center text-sm md:text-base">
          Trusted Boiler Systems for Every Application – Built to Last, Designed
          to Perform
        </p>
      </div>
      <motion.div
        className="w-full flex justify-center" // Added a gap for better spacing
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "easeIn" }}
      >
        <motion.div className="rounded-lg shadow-sm hover:shadow-md transition-all duration-300   border-b-4 border-b-[#DC2621] mb-16 md:mb-20">
          <Image
            src={"/assets/about/certificates/crisil.webp"}
            alt={"NSIC - CRISIL Rating"}
            height={600}
            width={400}
            className=" border border-gray-200/80 w-full object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4 mb-2 flex items-center gap-2 w-full justify-center">
            <LiaCertificateSolid className="text-[#DC2621] text-2xl" />
            NSIC - CRISIL Rating
          </h3>
        </motion.div>
      </motion.div>
      {/* Use the container variant on the grid container */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" // Added a gap for better spacing
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          // Apply the card variant to each item
          <motion.div
            key={index}
            variants={cardVariants}
            className="rounded-lg shadow-sm hover:shadow-md transition-all duration-300  border-b-4 border-b-[#DC2621]"
          >
            <Image
              src={service.icon}
              alt={service.title}
              height={600}
              width={400}
              className="h-[460px] border border-gray-200/80 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold my-4 flex items-center gap-2 w-full justify-center">
              <LiaCertificateSolid className="text-[#DC2621] text-2xl" />
              {service.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}