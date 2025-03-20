import React from "react";
import Footer from "./src/components/Footer"; // Import Footer
import Navbar from "./src/components/Navbar"; // Import Navbar if you have one
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Add Navbar if you have one */}
      <main className="flex-grow">
        <Outlet /> {/* This will render the current page */}
      </main>
      <Footer /> {/* Footer sticks to the bottom */}
    </div>
  );
}
