import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="w-full h-80 md:h-[463px] flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 md:px-8 bg-black/20">
      {/* Main Heading */}
      <h1 className="text-3xl hidden md:flex sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-[90%] md:max-w-3xl">
        Fast & Reliable Vehicle Recovery
      </h1>

      
      <p className="text-xl md:text-xl mt-8 md:mt-4 font-light md:font-medium max-w-[90%] md:max-w-2xl">
        24/7 Emergency Assistance | Towing | Transport | Removals
      </p>

      
      <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-lg">
        <Link
          to="/booking"
          className="bg-yellow-500 text-gray-900 w-full text-center px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
        >
          Book Pickup
        </Link>
        <a
          href="tel:+44 7407 207196"
          className="bg-green-500 text-white w-full text-center px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-400 transition-all duration-300"
        >
         Urgent? Call Now!
        </a>
        {/* <a
          href="https://wa.me/447407207196"
          className="bg-blue-500 text-white w-full text-center px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-400 transition-all duration-300"
        >
          Send a Message
        </a> */}
      </div>
    </div>
  );
}

export default HeroSection;
