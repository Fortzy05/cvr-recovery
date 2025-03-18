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
    <div className="w-full bg-gray-100 overflow-hidden">
      {/* Top Info Section */}
      <div className="bg-slate-600 md:h-[100px] flex text-white py-6 text-center">
        <div className="container uppercase mx-auto flex  flex-col sm:flex-row justify-center items-center gap-6">
          <p className="text-lg sm:text-xl font-semibold">
            15 Years of Experience
          </p>
          <div className="hidden sm:block border-l border-white h-8"></div>
          <p className="text-lg sm:text-xl font-semibold">Professional</p>
          <div className="hidden sm:block border-l border-white h-8"></div>
          <p className="text-lg sm:text-xl font-semibold">Open 24/7</p>
        </div>
      </div>

      {/* Services Section */}
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

      {/* Quote Request Form */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Get a Quote
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Fill in your details, and we’ll get back to you promptly.
        </p>
        <form className="max-w-lg mx-auto mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Service Required
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300">
              <option>Select a service</option>
              {services.map((service, index) => (
                <option key={index}>{service.title}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-500 transition-all"
          >
            Request a Quote
          </button>
        </form>
      </div>
    </div>
  );
}

export default ServicesSection;
