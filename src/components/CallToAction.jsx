import React from "react";

export default function CallToAction() {
  return (
    <div className="bg-yellow-500 text-gray-900 py-12 px-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
        Need Immediate Assistance?
      </h2>
      <p className="text-lg mt-2">
        Call us now for fast & reliable vehicle recovery.
      </p>

      {/* Call Button */}
      <a
        href="tel:+44 7407 207196"
        className="mt-6 inline-block w-full sm:w-auto bg-gray-900 text-yellow-500 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg 
        hover:bg-gray-800 hover:scale-105 transition-all duration-300"
      >
        📞 Call Now: +44 7407 207196
      </a>
    </div>
  );
}
