import React from "react";

const services = [
  { title: "Car Recovery" },
  { title: "Vehicle Towing" },
  { title: "Spare Wheel Change" },
  { title: "Fuel Assistance" },
  { title: "Breakdown Recovery" },
  { title: "Long-Distance Transport" },
];

export default function Quote() {
  return (
    <div className="relative bg-[url('/hero8.jpg')] bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Form Container */}
      <div className="relative z-10 max-w-4xl mx-auto bg-[#2d2d2d] bg-opacity-90 text-white p-6 md:p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white">
          Get a Quote
        </h2>
        <p className="text-center text-gray-300 mt-2">
          Fill in your details, and we’ll get back to you promptly.
        </p>

        {/* Form */}
        <form className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-500 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-300 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-3 border border-gray-500 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Service Selection */}
          <div className="md:col-span-2">
            <label className="block text-gray-300 font-medium">
              Service Required
            </label>
            <select className="w-full p-3 border border-gray-500 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option>Select a service</option>
              {services.map((service, index) => (
                <option key={index}>{service.title}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
              Request a Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
