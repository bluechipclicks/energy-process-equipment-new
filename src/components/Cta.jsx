import React from "react";

const Cta = () => {
  return (
    <div className="bg-black py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl font-medium mb-10 text-center text-white">
          Ready to upgrade your boiler system?
        </h2>
        <button className="bg-black text-white py-3 px-8 rounded  border-white border  font-medium hover:bg-[#DC2621] hover:border-[#DC2621] transition-colors duration-300 md:text-base text-sm">
          Get Team Assistance
        </button>
      </div>
    </div>
  );
};

export default Cta;
