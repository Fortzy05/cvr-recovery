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
const services = [
  {
    title: "Car Recovery",
    description:
      "We provide a 24/7 emergency car recovery service to help you when you're stranded. Whether your vehicle has broken down or you’ve been involved in an accident, our team will arrive promptly to assist you.",
    icon: <FaCar className="text-slate-600 text-4xl" />,
    image: hero8,
  },
  {
    title: "Vehicle Towing",
    description:
      "Our professional towing services ensure your vehicle is transported safely to your chosen location. We handle all types of vehicles, from small cars to large vans, ensuring minimal disruption to your day.",
    icon: <FaTruckPickup className="text-slate-600 text-4xl" />,
    image: hero17,
  },
  {
    title: "Spare Wheel Change",
    description:
      "A flat tire can be a major inconvenience. Our roadside assistance team will come to your location and replace your spare wheel on the spot, getting you back on the road as quickly as possible.",
    icon: <FaTools className="text-slate-600 text-4xl" />,
    image: hero16,
  },
  {
    title: "Fuel Assistance",
    description:
      "Ran out of fuel in the middle of nowhere? No problem! We offer a mobile fuel delivery service, bringing you enough fuel to reach the nearest station or get you to your destination.",
    icon: <FaGasPump className="text-slate-600 text-4xl" />,
    image: hero7,
  },
  {
    title: "Breakdown Recovery",
    description:
      "If your vehicle has broken down, our experienced team can provide quick recovery services. We diagnose minor faults on-site and tow your vehicle to a garage if needed.",
    icon: <FaWrench className="text-slate-600 text-4xl" />,
    image: hero15,
  },
  {
    title: "Long-Distance Transport",
    description:
      "Need to transport your vehicle across the country? Our long-distance vehicle transport service ensures your car is delivered safely and securely to your chosen location.",
    icon: <FaRoad className="text-slate-600 text-4xl" />,
    image: hero10,
  },
];

export default function Services() {
  return (
    <div className="w-full bg-gray-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Our Services
      </h2>
      <p className="text-lg text-gray-600 text-center mt-2 max-w-2xl mx-auto">
        We offer professional vehicle recovery, towing, and roadside assistance
        services to ensure you’re never left stranded.
      </p>

      {/* Service Sections */}
      <div className="mt-12 space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Service Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Service Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-700 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
