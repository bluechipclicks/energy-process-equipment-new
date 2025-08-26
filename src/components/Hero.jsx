import Link from "next/link";

// components/BackgroundVideoSection.tsx
export default function BackgroundVideoSection() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden  bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/home-bg.webp)" }}
    >
      {/* Background Video */}

      {/* Black Overlay */}

      {/* Centered Text Content */}
      <div className="relative z-20 h-full  px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-white text-3xl md:text-6xl font-semibold  mt-28 md:mt-44 mb-2 md:mb-6">
          Engineering Boilers With Excellence
        </h1>
        <p className="text-white text-sm md:text-2xl max-w-3xl mx-auto text-center mb-6 md:mb-8">
          Delivering innovative, reliable, and long-lasting boiler solutions
          backed by expertise, dedication, and trusted service.
        </p>
         <Link href={"/contact-us"} className=" py-3 px-8 w-fit text-sm  font-medium border hover:border-white hover:bg-transparent border-white text-black hover:text-white rounded bg-white transition-colors  duration-300 md:text-lg">
          Connect With Us
        </Link>
      </div>
    </section>
  );
}
