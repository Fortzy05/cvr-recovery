import React, { useState } from "react";

const services = [
  "Car Recovery",
  "Vehicle Towing",
  "Spare Wheel Change",
  "Fuel Assistance",
  "Breakdown Recovery",
  "Long-Distance Transport",
];

export default function Quote() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    serviceRequired: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Get a Quote
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Fill in your details, and we’ll get back to you promptly.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600 focus:outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Service Required */}
          <div>
            <label className="block text-gray-700 font-medium">
              Service Required
            </label>
            <select
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600 focus:outline-none"
              required
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Info */}
          <div>
            <label className="block text-gray-700 font-medium">
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600 focus:outline-none"
              placeholder="Provide any extra details"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-all"
          >
            Request a Quote
          </button>
        </form>
      </div>
    </div>
  );
}
