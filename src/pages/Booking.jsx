import React from "react";
import BookingForm from "../components/BookingForm";

function Booking() {
  return (
    <div className=" mx-auto py-12 px-6 overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Book a Vehicle Recovery
      </h1>
      <p className="text-gray-600 text-center mt-2">
        We are available 24/7 to assist you. Complete the form below.
      </p>
      <BookingForm />
    </div>
  );
}

export default Booking;
