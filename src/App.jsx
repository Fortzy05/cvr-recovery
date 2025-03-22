import React from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext";
import ScrollButton from "./components/ScrollButton";
import Layout from "../Layout"; // Import Layout
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import CarSales from "./pages/CarSales";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";

function App() {
  return (
    <ScrollProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="car-sales" element={<CarSales />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
      <ScrollButton/>
    </ScrollProvider>
  );
}

export default App;
