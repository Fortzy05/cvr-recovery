import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import HeroSection from "./HeroSection";
import hero17 from "../assets/hero17.jpg";
import hero16 from "../assets/hero16.jpg";
import hero15 from "../assets/hero15.jpg";
import hero7 from "../assets/hero7.jpg";
import hero10 from "../assets/hero10.jpg";
import hero14 from "../assets/hero14.jpg";

const heroImages = [hero17, hero16, hero15, hero7, hero10, hero14];

function HeroSlider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <HeroSection />
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="w-full h-80 md:h-[463px] "
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
