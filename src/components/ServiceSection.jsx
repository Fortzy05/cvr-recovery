import React from "react";

function ServicesSection() {
  return (
    <div className="w-full bg-gray-100">
      {/* Top Highlight Bar */}
      <div className="bg-slate-600 md:h-[100px] hidden md:flex text-white py-6 text-center">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-6">
          <p className="text-lg sm:text-xl font-light uppercase">
            15 Years of Experience
          </p>
          <div className="hidden sm:block border-l border-white h-8"></div>
          <p className="text-lg sm:text-xl font-light uppercase">
            Professional
          </p>
          <div className="hidden sm:block border-l border-white h-8"></div>
          <p className="text-lg sm:text-xl font-light uppercase">Open 24/7</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
