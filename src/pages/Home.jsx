import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Qoute from "../components/Qoute";
import Cta from "../components/Cta";
function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <ServiceSection />
      <Cta/>
      <Qoute/>
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default Home;
