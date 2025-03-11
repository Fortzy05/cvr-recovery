import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServiceList from "../components/ServiceList";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceList />
      <Footer />
    </div>
  );
}

export default Home;
