import React from "react";

const whyChooseUs = [
  { title: "Fast Response", description: "We arrive within 30 minutes." },
  {
    title: "Licensed Professionals",
    description: "Fully trained & insured staff.",
  },
  { title: "Nationwide Coverage", description: "We operate across the UK." },
  {
    title: "Affordable Pricing",
    description: "Competitive rates, no hidden fees.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mt-2">
          Reliable, fast, and professional service across the UK.
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md rounded-xl text-center p-6 border border-gray-200 transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-slate-600">
                {item.title}
              </h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
