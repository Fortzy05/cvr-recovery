import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import CarSales from "./pages/CarSales";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/car-sales" element={<CarSales />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
