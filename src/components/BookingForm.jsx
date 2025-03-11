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
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-600">
        Book a Service
      </h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Service Type</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select Service</option>
            <option value="breakdown">Breakdown Recovery</option>
            <option value="towing">Towing Service</option>
            <option value="transport">Vehicle Transport</option>
            <option value="removals">Home/Commercial Removals</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pickup Location</label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Dropoff Location</label>
          <input
            type="text"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Vehicle Details</label>
          <textarea
            name="vehicleDetails"
            value={formData.vehicleDetails}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
