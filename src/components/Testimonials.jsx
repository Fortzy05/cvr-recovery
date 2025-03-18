import React from "react";

const testimonials = [
  {
    name: "John Doe",
    review:
      "Fantastic service! They arrived within 20 minutes and got my car back on the road.",
  },
  {
    name: "Sarah Smith",
    review:
      "Highly professional and affordable. Would definitely use them again!",
  },
  {
    name: "Michael Lee",
    review: "Reliable and quick. I was stranded, and they saved the day!",
  },
];

function Testimonials() {
  return (
    <div className="container mx-auto py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg text-center p-6 transition-transform transform hover:scale-105"
          >
            <p className="text-gray-700 mt-2 italic">"{testimonial.review}"</p>
            <h3 className="text-lg font-semibold text-blue-700 mt-4">
              - {testimonial.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
