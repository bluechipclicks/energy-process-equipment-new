import Image from "next/image";
import React from "react";
import { FaUserTie } from "react-icons/fa";

// Your provided data
const clientData = [
  {
    company: " Mordern Petrofiles Limited",
    location: "Bamangama, Baroda",
  },
  {
    company: " Intergrated Fire Protection",
    location: "West Bengal",
  },
  {
    company: " Baroda Dairy Co.op. Milk Limited",
    location: "Bodeli",
  },
  {
    company: " Shree Ram Pertochem Limited",
    location: "Nandurbar, Maharastra",
  },
  {
    company: " Ranka Organics Pvt. Ltd.",
    location: "Udaipur, Rajasthan",
  },
  {
    company: " Omni Dye-chem Exports Limited",
    location: "Ahmedabad",
  },
  {
    company: " Electrothem (India) Limited",
    location: "Kutch",
  },
  {
    company: " Nipur Exports Pvt. Ltd.",
    location: "Maharastra",
  },
  {
    company: " Elite Marable Pvt. Ltd.",
    location: "Ajmer",
  },
  {
    company: " Sar Silicon Systems Pvt. Ltd.",
    location: "Himachal Pradesh",
  },
  {
    company: " Canton Laboratories Limited",
    location: "Makarpura",
  },
  {
    company: " Vihita Bio-Chem Limited",
    location: "Ankleshwar",
  },
  {
    company: " Bodal Chemical Limited",
    location: "Dudhwada, Baroda",
  },
  {
    company: " Pusa Hotel Pvt. Ltd.",
    location: "Rajasthan",
  },
  {
    company: " Larsen & Toubro Limited",
    location: "Allahabad Project",
  },
  {
    company: " Steelco Gujarat Limited",
    location: "Palaj, Gujarat",
  },
  {
    company: " National Dairy Develop Board",
    location: "NDDB, Anand",
  },
  {
    company: " BHEL Limited",
    location: "Hyderabad",
  },
  {
    company: " Gujarat Alkalies & Chemicals Ltd.",
    location: "Dahej, Dist.: Bharuch",
  },
  {
    company: " Inox India Limited",
    location: "Kalol, Dist.: Panchmahal",
  },
  {
    company: " Essar Steel Limited",
    location: "Hazira",
  },
  {
    company: " Welspun Limited",
    location: "Anjar",
  },
  {
    company: " Gas Authority of India Limited",
    location: "Waghodia, Gujarat",
  },
  {
    company: " Heavy Water Plant",
    location: "Baroda",
  },
  {
    company: " Birla Copper",
    location: "Dahej",
  },
  {
    company: " Thermax Limited",
    location: "Pune",
  },
  {
    company: " HOEC Limited",
    location: "Palaj",
  },
  {
    company: "Vohra Cold Storage",
    location: "Lucknow, U.P.",
  },
];

const internationalClient = [
  {
    company: "M/s. Tobinco Pharmaceuticals Limited",
    location: "Accra – Ghana",
    model_fuel: "IBO–15 – LDO",
  },
  {
    company: "M/s. Gulf Environmental Company L.L.C",
    location: "Abu Dhabi",
    model_fuel: "IBO–10 – Gas",
  },
  {
    company: "M/s. VFK Head Corporation",
    location: "Seoul, Korea",
    model_fuel: "IBO–0.5 – LDO",
  },
  {
    company: "M/s. Shree Jagaji Fab",
    location: "South Africa",
    model_fuel: "Dow – Eva",
  },
  {
    company: "M/s. Basumati Distribution Ltd.",
    location: "Bangladesh",
    model_fuel: "TC–04 – FO",
  },
  {
    company: "M/s. Tarini International",
    location: "Capetown, SA",
    model_fuel: "EL–02 – Electric",
  },
  {
    company: "M/s. Midland Rolling Mills Ltd",
    location: "Abeokuta, Nigeria",
    model_fuel: "IBO–1.5 – FO",
  },
  {
    company: "M/s. Finepack Industries Ltd",
    location: "Accra – Ghana",
    model_fuel: "SIB–0.5 Solid",
  },
];

const ClientList = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 pb-12 md:pb-20">
        {/* You can add a title here if needed, e.g., <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2> */}
        <div className="text-center mx-auto">
          <h2 className="text-3xl mb-6 md:mb-16 sm:text-4xl font-bold text-gray-900 tracking-tight">
            Our Indian Clients
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clientData.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-transparent"
            >
              <div className="w-full flex items-end justify-end  px-6 pt-2">
                <Image
                  src="/assets/client-icon.webp"
                  alt="client-icon"
                  height={40}
                  width={40}
                />
              </div>
              {/* Main content area for the company name (acts as logo) */}
              <div className="flex-grow flex items-center justify-center p-10 min-h-[180px]">
                <h3 className="text-center text-3xl md:text-2xl font-semibold ">
                  {client.company}
                </h3>
              </div>

              {/* Footer area for the location */}
              <div className="w-full px-6 pb-10 ">
                <p className=" text-sm text-gray-500 font-medium group-hover:text-[#DC2621]">
                  {client.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium mb-10 text-center text-white">
            Want To Explore Our Client Network?
          </h2>

          <a
            href={"/clientele.pdf"} // The path to your brochure in the public folder
            download={"energy-process-equipments-clients.pdf"} // The desired filename for the download
            className="bg-[#DC2621] text-white py-3 h-fit mt-8 md:mt-0 px-8 rounded hover:bg-transparent hover:border-white   font-medium  border border-black transition-colors duration-300 md:text-base text-sm"
          >
            View All Clients
          </a>
        </div>
      </div>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 pt-12 md:pt-20">
        {/* You can add a title here if needed, e.g., <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2> */}
        <div className="text-center mx-auto">
          <h2 className="text-3xl mb-6 md:mb-16 sm:text-4xl font-bold text-gray-900 tracking-tight">
            Our International Clients
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {internationalClient.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-transparent"
            >
              <div className="w-full flex items-end justify-end  px-6 pt-2">
                <Image
                  src="/assets/client-icon.webp"
                  alt="client-icon"
                  height={40}
                  width={40}
                />
              </div>
              {/* Main content area for the company name (acts as logo) */}
              <div className="flex-grow flex items-center justify-center p-10 min-h-[180px]">
                <h3 className="text-center text-3xl md:text-2xl font-semibold ">
                  {client.company}
                </h3>
              </div>

              {/* Footer area for the location */}
              <div className="w-full px-6 pb-10 ">
                <p className=" text-sm text-gray-500 font-medium group-hover:text-[#DC2621]">
                  {client.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientList;
