import Head from "next/head";
import Image from "next/image";

const AboutHero = () => {
  return (
    <>
      {/* Main container for the page with a light gray background */}
      <div className="h-screen bg-black/80">

      </div>
      <div className="py-16 sm:py-20">
        <div className=" w-full px-6 lg:px-8">
          <h1 className="text-6xl md:text-9xl tracking-wider font-semibold">
            ABOUT US
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:mt-8">
            {/* Column 1 */}
            <div className="w-full md:w-[25%]">
              <div className="mt-4 md:mt-8 space-y-4">
                <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                  Trusted Leadership
                </h3>
                <p className="text-base max-w-md mb-8">
                  Guided by Mr. Patel, EPE combines expertise, dedication, and
                  research-driven strategies for consistent client satisfaction.
                </p>
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <video
                    className=" w-full h-full object-cover"
                    src="/hero-bg.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </div>

            {/* Column 2 (Corrected) */}
            <div className="w-full md:w-[50%]">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-full">
                <Image
                  src="/assets/about/infrastructure.webp"
                  alt="Modern living room with a grey curved sofa and marble coffee tables"
                  fill
                  className="transition-transform duration-500 ease-in-out hover:scale-105 object-cover"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="w-full md:w-[25%]">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <video
                  className=" w-full h-full object-cover"
                  src="/hero-bg.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="px-1 mt-8">
                <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                  Reliable Solutions{" "}
                </h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed">
                  With 15 years’ experience, EPE delivers dependable boilers,
                  ensuring longevity, innovation, and customer-focused
                  engineering excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
