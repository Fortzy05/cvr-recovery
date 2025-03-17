import React from "react";
import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

function Booking() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-6 overflow-hidden">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Book a Vehicle Recovery
        </h1>
        <p className="text-gray-600 text-center mt-2">
          We are available 24/7 to assist you. Complete the form below.
        </p>
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
