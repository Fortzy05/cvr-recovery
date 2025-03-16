import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white text-center px-4 bg-black/25">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
        Fast & Reliable <br /> Vehicle Recovery
      </h1>
      <p className="text-sm sm:text-lg mt-3 sm:mt-4 font-medium sm:font-bold max-w-md">
        24/7 Emergency Assistance | Towing | Transport | Removals
      </p>
      <Link
        to="/booking"
        className="mt-5 sm:mt-6 bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
      >
        Get Assistance Now
      </Link>
    </div>
  );
}

export default HeroSection;
