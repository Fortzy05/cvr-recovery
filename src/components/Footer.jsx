import React from "react";
import FooterSection from "./FooterSection";

function Footer() {
  return (
    <footer>
      <FooterSection />
      <div className="bg-[#000000] text-white text-center p-4">
        <p>
          &copy; 2025 Vehicle Recovery Services |{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
