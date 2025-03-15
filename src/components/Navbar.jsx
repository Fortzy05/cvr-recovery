import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white p-4 flex">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Auto Sales Ltd</h1>
        <div className="md:flex hidden">
          <Link to="/" className="block py-2 px-4 hover:bg-blue-800 rounded">
            Home
          </Link>
          <Link
            to="/services"
            className="block py-2 px-4 hover:bg-blue-800 rounded"
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className="block py-2 px-4 hover:bg-blue-800 rounded"
          >
            Gallery
          </Link>
          <Link
            to="/car-sales"
            className="block py-2 px-4 hover:bg-blue-800 rounded"
          >
            Car Sales
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 hover:bg-blue-800 rounded"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="relative">
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div
          className={`md:flex md:space-x-6 absolute  bg-blue-600 top-8 right-0 pt-2 px-10 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="md:hidden items-center ">
            <Link to="/" className="block items-center w-[100%] py-2 px-4 hover:bg-blue-800 rounded">
              Home
            </Link>
            <Link
              to="/services"
              className="block py-2 px-4 hover:bg-blue-800 rounded"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="block py-2 px-4 hover:bg-blue-800 rounded"
            >
              Gallery
            </Link>
            <Link
              to="/car-sales"
              className="block py-2 px-4 text-nowrap  hover:bg-blue-800 rounded"
            >
              Car Sales
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-4 hover:bg-blue-800 rounded"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
