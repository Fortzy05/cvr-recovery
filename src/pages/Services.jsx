import React from "react";
import {
  FaCar,
  FaTruckPickup,
  FaTools,
  FaGasPump,
  FaWrench,
  FaRoad,
} from "react-icons/fa";

import hero17 from "../assets/hero17.jpg";
import hero16 from "../assets/hero16.jpg";
import hero15 from "../assets/hero15.jpg";
import hero7 from "../assets/hero7.jpg";
import hero10 from "../assets/hero10.jpg";
import hero8 from "../assets/hero8.jpg";

// ✅ Default data
const defaultServices = [
  {
    title: "Car Recovery",
    description:
      "We provide a 24/7 emergency car recovery service throughout the UK. Whether your car has broken down on a highway, stalled in traffic, or suffered mechanical failure at home, our skilled operators will be there quickly to recover your vehicle safely. We handle everything from minor roadside issues to post-accident recovery and work to get you back on track with minimal delay.",
    icon: <FaCar className="text-slate-600 text-4xl" />,
    image: hero8,
  },
  {
    title: "Vehicle Towing",
    description:
      "Our reliable vehicle towing service covers all vehicle types — cars, vans, SUVs, and light trucks. Whether you’ve broken down, had an accident, or simply need transportation to a repair shop or another city, we offer fast, secure, and professional towing with flatbed and hook-and-chain trucks depending on your needs. We prioritize vehicle safety and provide real-time updates on towing progress.",
    icon: <FaTruckPickup className="text-slate-600 text-4xl" />,
    image: hero17,
  },
  {
    title: "Spare Wheel Change",
    description:
      "If you've got a flat tire or puncture and need urgent help, we’re just a call away. Our team will come to your location and install your spare wheel safely and efficiently. If you don’t have a spare, we can help tow your vehicle to the nearest garage or tire specialist. Our service is ideal for drivers without the tools, knowledge, or physical capacity to change a tire themselves.",
    icon: <FaTools className="text-slate-600 text-4xl" />,
    image: hero16,
  },
  {
    title: "Fuel Assistance",
    description:
      "Running out of fuel can be a stressful and unexpected situation — but our mobile fuel delivery service ensures you're not stranded for long. We deliver petrol or diesel directly to your location, whether you’re stuck on the roadside, in the city, or in a rural area. Our service is fast, safe, and convenient, helping you reach the nearest filling station or your destination without further delay.",
    icon: <FaGasPump className="text-slate-600 text-4xl" />,
    image: hero7,
  },
  {
    title: "Breakdown Recovery",
    description:
      "Vehicle breakdowns can happen at any time. Our breakdown recovery specialists are equipped to diagnose minor faults and perform basic repairs at the scene — whether it's a dead battery, engine trouble, or overheating. If the issue can’t be fixed roadside, we’ll recover and transport your vehicle to a trusted garage or your preferred destination. We ensure you're safe and supported every step of the way.",
    icon: <FaWrench className="text-slate-600 text-4xl" />,
    image: hero15,
  },
  {
    title: "Long-Distance Transport",
    description:
      "Need to move your vehicle across cities or even nationwide? Our long-distance transport service offers secure and insured relocation for personal cars, classic vehicles, and fleet deliveries. Whether you’re relocating, buying or selling a vehicle, or need specialist transport for exhibitions or events, we ensure safe, damage-free delivery at competitive rates with live tracking available.",
    icon: <FaRoad className="text-slate-600 text-4xl" />,
    image: hero10,
  },
];

export default function Services({
  title = "Our Services",
  subtitle = "Professional roadside assistance, towing, and transport across the UK.",
  servicesData = defaultServices,
  className = "", // outer wrapper styling
  titleClass = "", // override title styling
  subtitleClass = "", // override subtitle styling
  cardClass = "", // override card styling
  variant = "default", // layout mode
  limit = null, // how many items to show
}) {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <div className={`w-full py-16 px-6 md:px-16 xl:px-24 ${className}`}>
      {/* Section Title */}
      <h2
        className={`text-3xl md:text-4xl font-bold text-center text-gray-800 ${titleClass}`}
      >
        {title}
      </h2>
      <p
        className={`text-lg text-gray-600 text-center mt-2 max-w-2xl mx-auto ${subtitleClass}`}
      >
        {subtitle}
      </p>

      {/* Service Cards */}
      <div className="mt-14 lg:px-24 space-y-20">
        {displayedServices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            } ${cardClass}`}
          >
            {/* Optional Image */}
            {variant !== "compact" && (
              <div className="w-full lg:w-[45%] rounded-lg overflow-hidden shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}

            {/* Text Content */}
            <div
              className={`w-full ${
                variant !== "compact" ? "lg:w-[55%]" : ""
              } text-center lg:text-left`}
            >
              <div className="flex justify-center lg:justify-start mb-3">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
