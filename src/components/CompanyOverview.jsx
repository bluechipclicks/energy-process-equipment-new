import Image from "next/image";

// components/CompanyOverview.tsx
export default function CompanyOverview() {
  return (
    <section className="bg-black text-white py-12 md:py-20  mb-12 md:mb-20">
      <div className="max-w-7xl mx-auto  px-6 lg:px-8  text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 md:mb-16">
          Leading Boiler Manufacturing & Services Company
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
