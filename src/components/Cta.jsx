"use client";
import React, { useState } from "react";
import ContactModal from "./contact/ContactModal";
import Image from "next/image";

const Cta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Defines the properties for each horizontal line
  // w = width (length) of the line
  // top = vertical offset from the top edge
  const lines = [
    { w: 150, top: 0 },
    { w: 160, top: 50 },
    { w: 180, top: 100 },
    { w: 190, top: 150 },
    { w: 200, top: 200 },
    { w: 210, top: 250 },
    { w: 220, top: 300 },
    { w: 230, top: 350 },
  ];

  return (
    <div className="bg-black py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Container for the line pattern */}
      <div className="absolute -right-10 top-0 h-full w-1/2 opacity-10">
        {lines.map((line, i) => (
          <div
            key={i}
            // h-[1px] sets the thickness of the horizontal line
            // right-0 anchors the line to the right edge
            className="absolute right-0 bg-white/60 h-[4px] -rotate-45"
            style={{
              width: `${line.w}px`,
              top: `${line.top}px`,
            }}
          />
        ))}
      </div>

      {/* Added z-10 to ensure content is above the pattern */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">
        <h2 className="text-4xl font-medium mb-10 text-center text-white">
          Ready to upgrade your boiler system?
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#DC2621] text-white py-3 h-fit mt-8 md:mt-0 px-8 rounded hover:bg-transparent hover:border-white font-medium border border-black transition-colors duration-300 md:text-base text-sm"
        >
          Get Team Assistance
        </button>
        {isModalOpen && (
          <ContactModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Cta;