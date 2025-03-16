import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0f172a] text-white p-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Auto Sales Ltd</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Services", "Gallery", "Car Sales", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="relative py-2 px-4 rounded-lg transition-all duration-300 group w-full"
              >
                {item}
                <span className="absolute left-0 top-0 h-full w-0 bg-[#3b82f6] transition-all duration-300 group-hover:w-full -z-10"></span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-50 top-16 right-0 w-64 bg-[#1e293b]  shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden`}
      >
        {["Home", "Services", "Gallery", "Car Sales", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(" ", "-")}`}
            className="block py-3 px-8 rounded-lg transition-all duration-300 relative group"
          >
            {item}
            <span className="absolute left-0 top-0 h-full w-0 bg-[#3b82f6] transition-all duration-300 group-hover:w-full -z-10"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
