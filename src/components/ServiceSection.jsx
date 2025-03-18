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
    <div className="container mx-auto">
      {/* Experience & Trust Section */}
      <div className="bg-slate-600 w-full h-[110px] py-6 flex flex-col sm:flex-row justify-center items-center text-center sm:text-left">
        <div className="text-white uppercase font-semibold flex flex-col sm:flex-row items-center gap-6">
          <p className="text-lg sm:text-xl md:text-2xl">
            15 Years of Experience
          </p>
          <div className="hidden sm:block border-l-[2px] h-10"></div>
          <p className="text-lg sm:text-xl md:text-2xl">Professional</p>
          <div className="hidden sm:block border-l-[2px] h-10"></div>
          <p className="text-lg sm:text-xl md:text-2xl">Open 24/7</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
