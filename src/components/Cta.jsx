import React from "react";
import { motion } from "framer-motion";
import hero17 from "../assets/hero17.jpg";
import hero8 from "../assets/hero8.jpg";
import hero10 from "../assets/hero10.jpg";
import hero15 from "../assets/hero15.jpg";
import hero16 from "../assets/hero16.jpg";

export default function Cta() {
  return (
    <main className="w-full bg-white text-gray-800">
      {/* Top CTA Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight md:leading-snug text-gray-900">
              Reliable Vehicle Recovery & Transport
            </h1>
            <p className="text-lg">
              Autosales Logistics is always ready to assist – quick,
              professional, and available 24/7!
            </p>
            <p className="text-lg font-semibold">
              Get your <span className="text-yellow-500">FREE</span> quote
              today!
            </p>

            <div className="flex justify-center md:justify-start">
              <a href="tel:+44 7407 207196">
                <motion.button
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg shadow-lg text-lg font-semibold transition"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  Call Now
                </motion.button>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={hero17}
              alt="Vehicle Recovery Service"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At{" "}
            <span className="font-semibold text-slate-700">
              Autosales Logistics Limited
            </span>
            , we are committed to delivering fast, efficient, and affordable
            vehicle recovery services across the UK. Our experienced
            professionals are equipped with modern tools and a passion for
            customer satisfaction. Whether it’s an emergency breakdown or
            scheduled transport, we’ve got you covered.
          </p>
        </div>

        {/* Photo Grid of Our Jobs */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[hero8, hero10, hero15, hero16, hero17, hero8].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
