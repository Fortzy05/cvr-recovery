import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const services = [
  {
    title: "Car Recovery",
    description: "Fast and reliable car recovery services 24/7.",
  },
  {
    title: "Vehicle Towing",
    description: "Safe towing for all types of vehicles.",
  },
  {
    title: "Spare Wheel Change",
    description: "On-the-spot wheel replacement for breakdowns.",
  },
  {
    title: "Fuel Assistance",
    description: "Ran out of fuel? We can refuel you on-site.",
  },
  {
    title: "Breakdown Recovery",
    description: "Roadside assistance when you need it the most.",
  },
  {
    title: "Long-Distance Transport",
    description: "Efficient vehicle transportation services.",
  },
];
export default function Services() {
  return (
    <main>
      <Navbar/>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 sm:p-8 text-center transition-transform hover:scale-105"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  );
}
