import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { PiProjectorScreenChart } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiCheckShield } from "react-icons/bi";

import { FaBuilding, FaCheckCircle, FaUsers, FaHeadset } from "react-icons/fa";

const stats = [
  {
    value: "1994",
    label: "Year Established",
    icon: (
      <FaBuilding className="text-6xl md:text-7xl text-white bg-[#DC2621] rounded-full p-2 border border-white" />
    ),
  },
  {
    value: "+2.5k",
    label: "Projects Completed",
    icon: (
      <BiCheckShield className="text-6xl md:text-7xl text-white bg-[#DC2621] rounded-full p-2 border border-white" />
    ),
  },
  {
    value: "+500",
    label: "Satisfied Clients",
    icon: (
      <FaUsers className="text-6xl md:text-7xl text-white bg-[#DC2621] rounded-full p-2 border border-white" />
    ),
  },
  {
    value: "24/7",
    label: "Customer Support",
    icon: (
      <RiCustomerService2Line className="text-6xl md:text-7xl text-white bg-[#DC2621] rounded-full p-2 border border-white" />
    ),
  },
];

// Updated features based on EPE's strengths
const features = [
  { text: "Manufacturing of Reliable & Long-Life Products" },
  { text: "Diverse Product Range Including IBR & Thermal Systems" },
  { text: "Commitment to Innovation and R&D" },
  { text: "Efficient and Effective After-Sales Service" },
];

const GlobalExecellence = () => {
  return (
    <>
      <div className="bg-black py-10  px-6 lg:px-8 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center flex items-center gap-4 md:justify-center px-4 ${
                index < stats.length - 1
                  ? "md:border-r md:border-gray-200/80"
                  : ""
              }`}
            >
              <div>{stat.icon}</div>
              <div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-white mt-2 tracking-widest text-sm md:text-base">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-white">
        <div className="container mx-auto px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content Section - Updated with EPE's information */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 ">
                Leading Boiler Manufacturing For Over 15 Years
              </h2>
              <p className="max-w-7xl mx-auto text-black mb-8">
                Since our inception in 1994, Energy Process Equipments (EPE) has
                been a trusted leader in designing and manufacturing industrial
                boilers, earning a reputation for reliability and longevity.
                Guided by the expert leadership of Mr. Kantilal B. Patel, our
                dedicated team is committed to engineering excellence and
                achieving success for our clients and stakeholders.
              </p>

              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-800">
                    <span className="text-[#DC2621] mr-3">
                      <FaChevronRight size={14} />
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <button className="py-3 px-8  flex items-center font-medium border hover:border-gray-300/60 bg-transparent border-[#DC2621] text-[#DC2621] hover:text-white rounded hover:bg-[#DC2621] transition-colors  duration-300 md:text-base text-sm">
                  CONTACT US
                  <HiArrowSmRight className="ml-2" size={24} />
                </button>
              </div>
            </div>
            {/* Image Collage Section - alt text updated for relevance */}
            <div className="relative md:min-h-[550px] ">
              <Image
                src="/assets/about/global-excellence.webp"
                alt="Expert engineer at Energy Process Equipments manufacturing facility"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section - Updated with EPE's stats */}
    </>
  );
};

export default GlobalExecellence;
