import React, { createContext, useState, useEffect } from "react";

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
    </ScrollContext.Provider>
  );
};
