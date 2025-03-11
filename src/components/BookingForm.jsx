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
    <div className="max-w-xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-700">
        Request a Service
      </h2>
      <p className="text-gray-600 text-center mt-2">
        Fill in the details below to request a towing or recovery service.
      </p>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Service Type
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
            >
              <option value="">Select Service</option>
              <option value="breakdown">Breakdown Recovery</option>
              <option value="towing">Towing Service</option>
              <option value="transport">Vehicle Transport</option>
              <option value="removals">Home/Commercial Removals</option>
            </select>
          </div>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
            />
          </div>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Vehicle Details
            </label>
            <textarea
              name="vehicleDetails"
              value={formData.vehicleDetails}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
