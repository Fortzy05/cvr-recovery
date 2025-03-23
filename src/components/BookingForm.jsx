import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    pickupLocation: "",
    dropoffLocation: "",
    vehicleDetails: "",
  });

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Booking request submitted!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-slate-700">
        Request a Service
      </h2>
      <p className="text-gray-600 text-center mt-2">
        Fill in the details below to request towing or recovery services.
      </p>

      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/** Full Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 outline-none"
            />
          </div>

          {/** Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 outline-none"
            />
          </div>

          {/** Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 outline-none"
            />
          </div>

          {/** Service Type */}
          <div>
            <label className="block text-gray-700 font-medium">
              Service Type
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 outline-none"
            >
              <option value="">Select Service</option>
              <option value="breakdown">Breakdown Recovery</option>
              <option value="towing">Towing Service</option>
              <option value="transport">Vehicle Transport</option>
              <option value="removals">Home/Commercial Removals</option>
            </select>
          </div>

          {/** Pickup Location */}
          <div>
            <label className="block text-gray-700 font-medium">
              Pickup Location
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 outline-none"
            />
          </div>

          {/** Dropoff Location */}
          <div>
            <label className="block text-gray-700 font-medium">
              Dropoff Location
            </label>
            <input
              type="text"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 outline-none"
            />
          </div>

          {/** Vehicle Details */}
          <div>
            <label className="block text-gray-700 font-medium">
              Vehicle Details
            </label>
            <textarea
              name="vehicleDetails"
              value={formData.vehicleDetails}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 outline-none"
            ></textarea>
          </div>

          {/** Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all transform hover:scale-105"
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
