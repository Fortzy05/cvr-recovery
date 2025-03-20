import React from "react";
import hero7 from "../assets/hero17.jpg";

export default function Cta() {
  return (
    <main className="w-full px-6 py-[60px] bg-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-[#000000] text-3xl sm:text-4xl font-bold leading-snug">
            🚗 Need Reliable Vehicle Recovery or Transport?
          </h1>
          <p className="text-lg text-gray-700">
            🔧 Edline Auto Services has you covered—always ready to assist!
          </p>
          <p className="text-lg font-semibold text-gray-800">
            📞 Call now for your FREE quote!
          </p>

          {/* Centered Button */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-slate-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-slate-700 transition-all transform hover:scale-105">
              CALL NOW
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={hero7}
            alt="cta image"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </main>
  );
}
