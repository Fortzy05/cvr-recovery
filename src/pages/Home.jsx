import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <ServiceSection />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Home;
