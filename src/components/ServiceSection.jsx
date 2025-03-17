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
      <div className="bg-slate-600 w-full h-[108px] flex">
        <div className="font-semibold mx-auto flex uppercase gap-12 text-white items-center">
          <p className="text-2xl">15 Years of Experience</p>
          <div className="border-l-[1px] h-14"></div>
          <p className="text-2xl">professional</p>
          <div className="border-l-[1px] h-14"></div>
          <p className="text-2xl">Open 24/7</p>
        </div>
      </div>
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white  shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 p-10"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
