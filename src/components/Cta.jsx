"use client";
import React, { useState } from "react";
import ContactModal from "./contact/ContactModal";

const Cta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-black py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl font-medium mb-10 text-center text-white">
          Ready to upgrade your boiler system?
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#DC2621] text-white py-3 h-fit mt-8 md:mt-0 px-8 rounded hover:bg-transparent hover:border-white   font-medium  border border-black transition-colors duration-300 md:text-base text-sm"
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
