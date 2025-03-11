import React from "react";
import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

function Booking() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Request a Service
        </h1>
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
