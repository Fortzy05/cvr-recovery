import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateField = (name, value) => {
    let errorMsg = "";

    if (name === "name" && value.length < 3) {
      errorMsg = "Name must be at least 3 characters";
    }
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMsg = "Enter a valid email";
    }
    if (name === "message" && value.length < 10) {
      errorMsg = "Message must be at least 10 characters";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate as user types
    validateField(name, value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Re-validate all fields before submission
    Object.keys(formData).forEach((key) => validateField(key, formData[key]));

    if (
      Object.values(errors).some((error) => error) ||
      Object.values(formData).some((val) => !val)
    ) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    try {
      const response = await fetch(
        "rapid-autorescue-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Something went wrong");

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ Error submitting contact form:", error.message);
      toast.error("Failed to send message. Please try again later.");
    }
  };
  
  

  return (
    <div className="w-full">
      {/* Contact Section */}
      <div
        className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/hero8.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg">Have questions? Reach out to us anytime!</p>
        </div>

        {/* Form & Contact Info */}
        <div className="relative z-10 mt-10 w-full max-w-4xl grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <form
            className="bg-white p-6 shadow-md rounded-lg space-y-4"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              Send Us a Message
            </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-yellow-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-yellow-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-yellow-500"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

            <button
              type="submit"
              className={`w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold transition ${
                Object.values(errors).some((error) => error) ||
                Object.values(formData).some((val) => !val)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "hover:bg-yellow-400"
              }`}
              disabled={
                Object.values(errors).some((error) => error) ||
                Object.values(formData).some((val) => !val)
              }
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="bg-white p-6 shadow-md rounded-lg space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Contact Details
            </h2>
            <p className="text-gray-700">📞 +44 7407 207196</p>
            <p className="text-gray-700">📧 Autosaleslogisticsltd@gmail.com</p>
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
