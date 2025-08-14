// components/AboutEPE.js

import Image from 'next/image';

const AboutEPE = () => {
    // data/aboutData.js or inside your component file

 const aboutData = [
  {
    imageUrl: "/assets/about/expertise.webp", // Replace with your actual image
    title: "15+ Years Making Better",
    description: "EPE has a reputation for producing reliable and long-life products, catering to diverse boiler specifications since its inception in 1994.",
  },
  {
    imageUrl: "/assets/about/team.webp", // Replace with your actual image
    title: "About Team",
    description: "Under able leadership and a team of young, dedicated, and qualified professionals, we are committed to achieving grand success.",
  },
  {
    imageUrl: "/assets/about/infrastructure.webp", // Replace with your actual image
    title: "About Infrastructure",
    description: "With a commitment to R&D, we innovate and manufacture IBR & Non-IBR Boilers, Thermic Fluid Heaters, and provide prompt after-sales service.",
  },
];
  return (
    <section className="pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="text-center mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            A Leader In The Industry
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Energy Process Equipments (EPE) has been designing and manufacturing boilers for over 15 years, thus developing a reputation for producing reliable and long-life products. Since its inception on February 25, 1994, the company is catering to various requirements involving an assortment of specifications of boilers for diverse applications.
          </p>
        </div>

        {/* --- Cards Grid Section --- */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded overflow-hidden flex flex-col">
              <div className="relative h-64 w-full">
                {/* Overlay for the black and white effect and text */}

                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className='object-cover'
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutEPE;