import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="bg-blue-700 text-white text-center py-20 px-6">
      <h1 className="text-4xl md:text-6xl font-bold">
        Fast & Reliable Vehicle Recovery
      </h1>
      <p className="text-lg mt-4">
        24/7 Emergency Assistance | Towing | Transport | Removals
      </p>
      <Link
        to="/booking"
        className="mt-6 inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400"
      >
        Get Assistance Now
      </Link>
    </div>
  );
}

export default HeroSection;
