import React from "react";

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

function ServicesSection() {
  return (
    <div className="w-full overflow-hidden">
      {/* Info Section */}
      <div className="bg-slate-600 w-full py-6 flex flex-col md:flex-row items-center justify-center gap-6 text-white text-center">
        <p className="text-lg sm:text-xl font-semibold">
          15 Years of Experience
        </p>
        <div className="hidden md:block border-l border-white h-10"></div>
        <p className="text-lg sm:text-xl font-semibold">Professional</p>
        <div className="hidden md:block border-l border-white h-10"></div>
        <p className="text-lg sm:text-xl font-semibold">Open 24/7</p>
      </div>

      {/* Services Grid */}
      <div className="py-10 px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg text-center p-6 sm:p-8 transition-transform transform hover:scale-105"
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
    </div>
  );
}

export default ServicesSection;
