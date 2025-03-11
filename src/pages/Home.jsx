import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <ServiceSection />
      <Footer />
    </div>
  );
}

export default Home;
