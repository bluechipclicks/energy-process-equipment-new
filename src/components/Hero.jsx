// components/BackgroundVideoSection.tsx
export default function BackgroundVideoSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Centered Text Content */}
      <div className="relative z-20 h-full flex items-center px-6 lg:px-8 ">
        <h1 className="text-white text-3xl md:text-7xl font-bold leading-tight max-w-4xl mt-8">
          High Temperature Thermal Oil Heaters, Steam Boilers,<br />
           <span className="text-[#DC2621]"> Hot Water </span> and Hot Air Generators
        </h1>
      </div>
    </section>
  );
}
