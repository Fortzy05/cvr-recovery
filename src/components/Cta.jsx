import React from "react";
import { motion } from "framer-motion";
import hero17 from "../assets/hero17.jpg";

export default function Cta() {
  return (
    <main className="w-full px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-slate-700 text-4xl sm:text-5xl font-bold leading-tight md:leading-snug">
            Reliable Vehicle Recovery & Transport
          </h1>
          <p className="text-lg text-gray-700">
            Autosales Logistics is always ready to assist.
          </p>
          <p className="text-lg text-gray-700">
            Quick, professional, and available 24/7!
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Get your FREE quote today!
          </p>

          {/* Call Button with Bounce Effect */}
          <div className="flex justify-center md:justify-start">
            <a href="tel:+44 7407 207196">
              <motion.button
                className="bg-slate-600 text-white px-8 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-slate-700 transition-all"
                animate={{ y: [0, -10, 0] }} // Bounces once on mount
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                }}
                whileHover={{ scale: 1.1 }} // Slight pop effect on hover
              >
                Call Now
              </motion.button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={hero17}
            alt="Vehicle Recovery Service"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </main>
  );
}
