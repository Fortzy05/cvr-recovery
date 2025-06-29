import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Emma Johnson",
    review:
      "Fantastic service! They arrived within 20 minutes and got my car back on the road.",
  },
  {
    name: "James Carter",
    review:
      "Highly professional and affordable. Would definitely use them again!",
  },
  {
    name: "Sophia Williams",
    review: "Reliable and quick. I was stranded, and they saved the day!",
  },
  {
    name: "Daniel Thompson",
    review:
      "Great experience! The team was friendly, and the pricing was very reasonable.",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Real stories from happy clients who trust our services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-left relative"
            >
              <FaQuoteLeft className="text-yellow-500 text-2xl mb-3" />
              <p className="text-gray-700 text-sm italic leading-relaxed">
                "{testimonial.review}"
              </p>
              <h3 className="text-base font-semibold text-gray-800 mt-4">
                – {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
