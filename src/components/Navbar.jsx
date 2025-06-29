import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 md:h-[98px] h-24 flex items-center text-white   shadow-lg font-serif relative">
      <div className="container md:px-8 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" >
          <img src="/logo-original.svg" className="md:h-[180px] md:w-[180px] w-[170px] h-[120px] object-cover" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-xl">
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
          className="md:hidden text-white mr-6 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-50 top-16 right-0 w-56 bg-gray-900 shadow-lg text-xl transition-transform duration-300 ${
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
            <span className="absolute left-0 top-0 h-full w-0 bg-gray-800 transition-all duration-300 group-hover:w-full -z-10"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
