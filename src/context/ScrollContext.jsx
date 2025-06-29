import React, { createContext, useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";


export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollContext.Provider value={{ isVisible }}>
      {children}

      {/* Floating Buttons (Always Visible) */}
      <div className="fixed bottom-[100px] right-12 flex flex-col gap-5 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/447407207196"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
        >
          <FaWhatsapp className="text-2xl" />
        </a>

        <a
          href="tel:+447407207196"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 text-white shadow-lg hover:bg-slate-700 transition-all transform hover:scale-105"
        >
          <FaPhoneAlt className="text-2xl" />
        </a>
      </div>
    </ScrollContext.Provider>
  );
};

  
