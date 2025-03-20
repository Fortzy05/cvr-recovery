import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-600 text-white p-4 shadow-lg relative">
      <div className="container md:px-8 px-2 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl tracking-tighter font-serif font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
          Edline Auto ltd
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Gallery", path: "/gallery" },
            { name: "Car Sales", path: "/car-sales" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="relative text-nowrap py-2 px-4  transition-all duration-300 group w-full block hover:bg-slate-700"
            >
              {name}
              <span className="absolute left-0 top-0 h-full w-0 bg-[#3b82f6] transition-all duration-300 group-hover:w-full -z-10"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-50 top-16 right-0 w-64 bg-slate-600 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden`}
      >
        {[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Gallery", path: "/gallery" },
          { name: "Car Sales", path: "/car-sales" },
          { name: "Contact", path: "/contact" },
        ].map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className="block text-nowrap py-3 px-8 rounded-lg transition-all duration-300 relative group w-full"
          >
            {name}
            <span className="absolute left-0 top-0 h-full w-0 bg-slate-700 transition-all duration-300 group-hover:w-full -z-10"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
