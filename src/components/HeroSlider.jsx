import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const heroImages = [
  "/src/assets/hero1.jpg",
  "/src/assets/hero2.jpg",
  "/src/assets/hero3.jpg",
  "/src/assets/hero4.jpg",
  "/src/assets/hero5.jpg",
  "/src/assets/hero6.jpg",
];

function HeroSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="w-full h-80 md:h-[500px]"
    >
      {heroImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
