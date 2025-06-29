import React from "react";
import {
  FaClock,
  FaUserShield,
  FaMapMarkedAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const whyChooseUs = [
  {
    title: "Fast Response",
    description:
      "We arrive within 30 minutes, ensuring you're never left stranded for long.",
    icon: <FaClock className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Licensed Professionals",
    description:
      "Our team is fully trained, insured, and ready to assist you professionally.",
    icon: <FaUserShield className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Nationwide Coverage",
    description:
      "Wherever you are in the UK, we’ve got you covered with reliable services.",
    icon: <FaMapMarkedAlt className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Affordable Pricing",
    description:
      "Transparent rates with no hidden charges – value and peace of mind guaranteed.",
    icon: <FaMoneyBillWave className="text-yellow-500 text-3xl" />,
  },
];

export default function WhyChooseUs() {
  return (
    <div className="w-full bg-white py-20 px-6 md:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We deliver reliable, fast, and professional service throughout the UK.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300 text-center border border-gray-200"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
