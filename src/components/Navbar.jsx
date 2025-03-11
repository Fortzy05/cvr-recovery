import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vehicle Recovery</h1>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div
          className={`md:flex md:space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link to="/" className="block py-2 px-4 hover:bg-blue-800 rounded">
            Home
          </Link>
          <Link
            to="/booking"
            className="block py-2 px-4 hover:bg-blue-800 rounded"
          >
            Book a Service
          </Link>
          <Link
            to="/dashboard"
            className="block py-2 px-4 hover:bg-blue-800 rounded"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
