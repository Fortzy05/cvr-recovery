import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Contact Section */}
      <div
        className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/hero8.jpg')",
        }}
      >
        {/* Overlay to enhance readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg">Have questions? Reach out to us anytime!</p>
        </div>

        {/* Form & Contact Info */}
        <div className="relative z-10 mt-10 w-full max-w-4xl grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <form className="bg-white p-6 shadow-md rounded-lg space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Send Us a Message
            </h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="bg-white p-6 shadow-md rounded-lg space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Contact Details
            </h2>
            <p className="text-gray-700">📞 +44 7407 207196</p>
            <p className="text-gray-700">📧 Edline24/7ltd@gmail.com</p>
            <p className="text-gray-700">
              📍 Birmingham, Walsall, Wolverhampton, Dudley, Coventry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
