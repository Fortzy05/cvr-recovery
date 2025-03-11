import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vehicle Recovery</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/booking" className="hover:underline">
            Book a Service
          </Link>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
