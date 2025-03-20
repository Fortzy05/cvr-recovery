import React from "react";
import FooterSection from "./FooterSection";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <FooterSection />
      <div className="bg-[#000000] overflow-hidden text-white text-center p-4">
        <p>
          &copy; {currentYear} Edline Auto Limited | {}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
