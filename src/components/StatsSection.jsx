// components/StatsSection.js

import React from 'react';

// You can import the stats data from another file or define it here
const stats = [
  {
    value: "15+ ",
    titleLine1: " Years Industry",
    titleLine2: "Experience",
    description:
      "Delivering trusted boiler solutions since 1994, built on engineering excellence and long-term customer satisfaction.",
  },
  {
    value: "840+",
    titleLine1: "Satisfied",
    titleLine2: "Clients",
    description:
      "Serving hundreds of clients with reliable, long-life thermal systems and efficient after-sales service.",
  },
  {
    value: "7+",
    titleLine1: "Sectors",
    titleLine2: "Served",
    description:
      "Providing tailored boiler applications across key industries including food, textile, chemical, hospitality, and more.",
  },
  {
    value: "24/7",
    titleLine1: "Service",
    titleLine2: "Support",
    description:
      "Round-the-clock technical support and maintenance services to ensure maximum uptime and client satisfaction.",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-lg text-center shadow-md border-b-4 border-b-[#DC2621] border-t border-t-gray-200/40">
              <p className="text-3xl md:text-4xl  font-bold text-[#DC2621]">
                {stat.value}
              </p>
              <h3 className="mt-3 text-lg font-bold  leading-tight">
                {stat.titleLine1}
                &nbsp;
                {stat.titleLine2}
              </h3>
              <p className="mt-3 text-sm ">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;