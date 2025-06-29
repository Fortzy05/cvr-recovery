import React from "react";

import HeroSlider from "../components/HeroSlider";
import ServiceSection from "../components/ServiceSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Qoute from "../components/Qoute";
import Cta from "../components/Cta";

function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSlider />
      <ServiceSection />
      <Cta />
     
      <Qoute />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
  );
}

export default Home;
