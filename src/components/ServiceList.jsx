import React from "react";

const services = [
  {
    title: "Breakdown Recovery",
    description: "24/7 roadside assistance and vehicle recovery.",
  },
  {
    title: "Towing Services",
    description: "Safe towing for all types of vehicles.",
  },
  {
    title: "Vehicle Transport",
    description: "Long-distance vehicle transport solutions.",
  },
  {
    title: "Home & Commercial Removals",
    description: "Fast and efficient moving services.",
  },
];

function ServiceList() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg text-center"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {service.title}
            </h3>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceList;
