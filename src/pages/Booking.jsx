import React from "react";
import BookingForm from "../components/BookingForm";
import bgImage from "../assets/hero17.jpg"; // Ensure you have an appropriate image

function Booking() {
  return (
    <div
      className="relative w-full py-16 px-6 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Book a Vehicle Recovery
        </h1>
        <p className="text-lg text-gray-200 mt-2">
          We’re available 24/7. Fill out the form and we’ll get to you ASAP.
        </p>
      </div>

      {/* Form Container */}
      <div className="relative z-10 max-w-3xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-xl">
        <BookingForm />
      </div>
    </div>
  );
}

export default Booking;
