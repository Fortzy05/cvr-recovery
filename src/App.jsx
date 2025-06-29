import React from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext";
import ScrollButton from "./components/ScrollButton";
import Layout from "../Layout";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import CarSales from "./pages/CarSales";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ScrollProvider>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/car-sales" element={<CarSales />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>

        {/* Global Toast Container */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" // Or "dark", "light"
          limit={3}
        />

        <ScrollButton />
      </>
    </ScrollProvider>
  );
}

export default App;
