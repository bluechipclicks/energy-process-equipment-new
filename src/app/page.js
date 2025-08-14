import AboutEPE from "@/components/AboutEPE";
import ClientSlider from "@/components/ClientSilder";
import CompanyOverview from "@/components/CompanyOverview";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import GlobalPresence from "@/components/GlobalPresence";
import Hero from "@/components/Hero";
import IndustryWeServe from "@/components/IndustryWeServe";
import NavBar from "@/components/NavBar";
import ProductSlider from "@/components/ProductSlider";
import React from "react";

function page() {
  return (
    <>
      <NavBar />
      <Hero />
      <ClientSlider />
      <CompanyOverview />
      <ProductSlider />
      <IndustryWeServe/>
      <AboutEPE/>
      <Cta/>
       <GlobalPresence/>
      {/* <Footer /> */}
    </>
  );
}

export default page;
