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

function WhyChooseUs() {
  return (
    <div className="mx-auto py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-6">
        {whyChooseUs.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg text-center p-6 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-blue-700">
              {item.title}
            </h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
