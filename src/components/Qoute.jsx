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

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    serviceRequired: "",
    additionalInfo: "",
  });

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "fullName":
        errorMsg =
          value.length < 3 ? "Full name must be at least 3 characters" : "";
        break;
      case "phoneNumber":
        errorMsg = /^\d{10,15}$/.test(value)
          ? ""
          : "Enter a valid phone number (10-15 digits)";
        break;
      case "serviceRequired":
        errorMsg = value ? "" : "Please select a service";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(formData).forEach((key) => validateField(key, formData[key]));

    if (
      Object.values(errors).some((error) => error) ||
      Object.values(formData).some((val) => !val)
    ) {
      alert("Please correct the errors before submitting.");
      return;
    }

    console.log("Form Data Submitted:", formData);
    alert("Quote request submitted!");
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
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-2 focus:ring-slate-600 focus:outline-none`}
              placeholder="Enter your name"
              required
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-2 focus:ring-slate-600 focus:outline-none`}
              placeholder="Enter your phone number"
              required
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Service Required
            </label>
            <select
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.serviceRequired ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-2 focus:ring-slate-600 focus:outline-none`}
              required
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.serviceRequired && (
              <p className="text-red-500 text-sm mt-1">
                {errors.serviceRequired}
              </p>
            )}
          </div>

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

          <button
            type="submit"
            disabled={
              Object.values(errors).some((error) => error) ||
              Object.values(formData).some((val) => !val)
            }
            className={`w-full bg-yellow-500 text-gray-900 py-3 rounded-md font-semibold transition-all ${
              Object.values(errors).some((error) => error) ||
              Object.values(formData).some((val) => !val)
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-yellow-400"
            }`}
          >
            Request a Quote
          </button>
        </form>
      </div>
    </div>
  );
}
