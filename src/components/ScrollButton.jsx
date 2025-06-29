import React, { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const { isVisible } = useContext(ScrollContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-12 p-3 rounded-full bg-gray-900 text-slate-100 shadow-lg  transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
