"use client";
// components/ProductSlider.js
import { BsArrowLeft } from "react-icons/bs";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// --- SLIDER DATA ---
// Replace with your actual product data
const products = [
  {
    name: "IBR Boiler",
    image: "/assets/products/ibr.webp", // Replace with a different image
  },

  {
    name: "Small Industrial Boiler [SIB]",
    image: "/assets/products/sib.webp", // Replace with a different image
  },

  {
    name: "Thermic Fluid Heaters [Thermopack]",
    image: "/assets/products/thermopack.webp",
  },
  {
    name: "Hot Air Generators",
    image: "/assets/products/hot-air-generators.webp",
  },
];
const textVariants = {
  hidden: {
    y: "100%", // Start from below the view
    opacity: 0,
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  }),
};
const ProductSlider = () => {
  // State to track the currently active slide index
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    // Main container for the slider section
    <div className="relative w-full  flex flex-col items-center   overflow-hidden pb-12 md:pb-20 bg-white px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
        Products Categories
      </h2>
      <p className=" max-w-7xl mx-auto text-black mb-6 md:mb-16 text-center text-sm md:text-base">
        Trusted Boiler Systems for Every Application – Built to Last, Designed
        to Perform
      </p>
      {/* Swiper Component Container */}

      <div className="w-full h-[60vh] max-w-7xl relative mb-0 md:mb-6">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          // Connect custom navigation buttons
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          // Update active slide index on change
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="h-full w-full"
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={product.name}
              className="relative flex items-center justify-center"
            >
              <div className="">
                {/* Background Animated Text */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <motion.h1
                    className="text-4xl md:text-6xl lg:text-9xl max-w-6xl mx-auto font-extrabold text-gray-200/80 text-center"
                    variants={textVariants}
                    initial="hidden"
                    animate={activeSlide === index ? "visible" : "hidden"}
                  >
                    {product.name}
                  </motion.h1>
                </div>

                {/* Product Image Fixed at Bottom */}
                <div className="relative z-10 w-full flex items-center justify-center md:pb-8 top-24">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={650}
                    className="object-contain md:h-[490px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Call-to-Action Buttons */}
      <div className=" z-20 flex items-center gap-4">
        <button className=" py-3 px-8   font-medium border hover:border-gray-300/60 bg-transparent border-[#DC2621] text-[#DC2621] hover:text-white rounded hover:bg-[#DC2621] transition-colors  duration-300 md:text-base text-sm">
          View All Products
        </button>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-12 z-20 flex flex-col gap-3">
        {/* Next Button */}
        <button className="swiper-button-next-custom cursor-pointer border border-gray-200/80 bg-[#DC2621] text-white rounded-full w-11 h-11 flex items-center justify-center shadow-md hover:bg-black transition-colors">
          <BsArrowRight className="text-xl" />
        </button>
        {/* Previous Button */}
        <button className="swiper-button-prev-custom cursor-pointer bg-[#DC2621] text-white rounded-full border border-gray-200/80 w-11 h-11 flex items-center justify-center shadow-md hover:bg-black transition-colors">
          <BsArrowLeft className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
