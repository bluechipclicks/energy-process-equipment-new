// components/AboutEPE.js
"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const AboutEPE = () => {
  // data/aboutData.js or inside your component file

  const aboutData = [
    {
      imageUrl: "/assets/about/expertise.webp", // Replace with your actual image
      title: "15+ Years Making Better",
      description:
        "EPE has a reputation for producing reliable and long-life products, catering to diverse boiler specifications since its inception in 1994.",
    },
    {
      imageUrl: "/assets/about/team.webp", // Replace with your actual image
      title: "About Team",
      description:
        "Under able leadership and a team of young, dedicated, and qualified professionals, we are committed to achieving grand success.",
    },
    {
      imageUrl: "/assets/about/infrastructure.webp", // Replace with your actual image
      title: "About Infrastructure",
      description:
        "With a commitment to R&D, we innovate and manufacture IBR & Non-IBR Boilers, Thermic Fluid Heaters, and provide prompt after-sales service.",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section className="pb-12 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="text-center mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight"
          >
            A Leader In The Industry
          </motion.h2>
          <motion.p className="mt-4 text-sm md:text-base text-gray-600">
            Energy Process Equipments (EPE) has been designing and manufacturing
            boilers for over 15 years, thus developing a reputation for
            producing reliable and long-life products. Since its inception on
            February 25, 1994, the company is catering to various requirements
            involving an assortment of specifications of boilers for diverse
            applications.
          </motion.p>
        </div>

        {/* --- Cards Grid Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mt-6 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className=" border-b-4 border-b-red-600 rounded-lg overflow-hidden flex flex-col shadow-md "
            >
              <div className="relative h-64 w-full">
                {/* Overlay for the black and white effect and text */}

                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white flex-grow text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutEPE;
