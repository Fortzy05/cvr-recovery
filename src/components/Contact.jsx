import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="text-center max-w-2xl mx-auto">
        <p className="mb-4 text-lg">
          For immediate assistance, call us anytime:
        </p>
        <a
          href="tel:+12345678900"
          className="text-blue-600 text-xl font-semibold hover:underline mb-4 block"
        >
          (234) 567-8900
        </a>
        <p className="mb-4">
          Email:{" "}
          <a
            href="mailto:info@roadsiderescue.com"
            className="text-blue-600 hover:underline"
          >
            info@roadsiderescue.com
          </a>
        </p>
        <p>
          Serving [Your City] and surrounding areas 24 hours a day, 7 days a
          week
        </p>
      </div>
    </section>
  );
}

export default Contact;
