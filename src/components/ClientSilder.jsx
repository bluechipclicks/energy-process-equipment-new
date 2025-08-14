import Image from "next/image";

const clients = [
  "/assets/clients/l-and-t-logo.webp",
  "/assets/clients/benzo.webp",
  "/assets/clients/electrotherm.webp",
  "/assets/clients/l-and-t-logo.webp",
  "/assets/clients/benzo.webp",
  "/assets/clients/electrotherm.webp",
  "/assets/clients/l-and-t-logo.webp",
  "/assets/clients/benzo.webp",
  "/assets/clients/electrotherm.webp",
  "/assets/clients/l-and-t-logo.webp",
  "/assets/clients/benzo.webp",
  "/assets/clients/electrotherm.webp",
  "/assets/clients/l-and-t-logo.webp",
  "/assets/clients/benzo.webp",
  "/assets/clients/electrotherm.webp",
  "/assets/clients/l-and-t-logo.webp",
  "/assets/clients/benzo.webp",
  "/assets/clients/electrotherm.webp",
];

export default function ClientSlider() {
  // Duplicate list for seamless infinite effect
  const allClients = [...clients, ...clients];

  return (
    <section className="w-full overflow-hidden py-12 md:py-20 ">
      <div className="relative group  pb-10 md:pb-20">
        <div className="flex animate-slide gap-8 w-max">
          {allClients.map((src, index) => (
            <div key={index} className="flex items-center justify-center border rounded p-4 border-gray-300/60">
              <Image
                src={src}
                alt={`Client ${index + 1}`}
                width={200}
                height={50}
                className=" grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto  text-center  px-6 lg:px-8 ">
        <div className="mx-auto max-w-3xl lg:text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">We love being your growth partner</h2>
        </div>
        <p className=" text-sm md:text-base text-black">
          Among boiler manufacturers and boiler maintenance companies, Energy Process Equipments has established its name for innovation. Through a commitment to research and development and a sound adaptable strategy, today the company is involved into the creation of IBR, Thermic Fluid Heating Systems, Hot Air Generators, DM Plants, IBR Boiler Repairs among others.
        </p>
      </div>
    </section>
  );
}
