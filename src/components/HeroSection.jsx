import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="bg-gray-100 py-20 text-center">
      <h1 className="text-5xl font-bold text-blue-600">
        Fast & Reliable Vehicle Recovery
      </h1>
      <p className="text-lg text-gray-700 mt-4">
        We provide emergency towing, transport, and roadside assistance 24/7.
      </p>
      <Link
        to="/booking"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
      >
        Book a Service
      </Link>
    </div>
  );
}

export default HeroSection;
