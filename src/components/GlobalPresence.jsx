import Image from "next/image";
import React from "react";

const GlobalPresence = () => {
  return (
    <div className="px-6 lg:px-8  py-20 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
        Global Presence
      </h2>
      <p className=" max-w-7xl mx-auto text-black mb-8 text-center">
        Delivering Trusted Thermal Solutions Backed by Proven Expertise"
      </p>

      <Image
        src="/assets/global_presence_map.png"
        alt="map"
        width={1200}
        height={700}
      />
    </div>
  );
};

export default GlobalPresence;
