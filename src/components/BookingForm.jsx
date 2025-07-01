import { useState } from "react";
import { toast } from "react-toastify";
// adjust path as needed

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    pickupLocation: "",
    dropoffLocation: "",
    vehicleDetails: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    pickupLocation: "",
    dropoffLocation: "",
    vehicleDetails: "",
  });

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "name":
        errorMsg =
          value.length < 3 ? "Full name must be at least 3 characters" : "";
        break;
      case "phone":
        errorMsg = /^\d{10,15}$/.test(value)
          ? ""
          : "Enter a valid phone number (10-15 digits)";
        break;
      case "email":
        errorMsg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Enter a valid email";
        break;
      case "serviceType":
        errorMsg = value ? "" : "Please select a service type";
        break;
      case "pickupLocation":
        errorMsg = value.length < 3 ? "Pickup location is required" : "";
        break;
      case "dropoffLocation":
        errorMsg = value.length < 3 ? "Dropoff location is required" : "";
        break;
      case "vehicleDetails":
        errorMsg =
          value.length < 10
            ? "Provide at least 10 characters of vehicle details"
            : "";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field as user types
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
        "https://rapid-autorescue-backend.onrender.com/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      
      if (!response.ok) throw new Error("Something went wrong");
      if (response.ok) {
        toast.success("✅ Booking submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceType: "",
          pickupLocation: "",
          dropoffLocation: "",
          vehicleDetails: "",
        });
      } else {
        toast.error(
          `❌ Failed to submit booking: ${result.error || "Unknown error"}`
        );
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Network error while submitting booking");
    }
  };
  


  return (
    <div className="max-w-lg mx-auto p-8 mt-10">
      <h2 className="text-2xl font-bold text-center text-slate-700">
        Request a Service
      </h2>
      <p className="text-gray-600 text-center mt-2">
        Fill in the details below to request towing or recovery services.
      </p>

      <form className="mt-6 text-slate-700" onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/** Full Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring focus:ring-yellow-500 outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/** Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring focus:ring-yellow-500 outline-none`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/** Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring focus:ring-yellow-500 outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/** Service Type */}
          <div>
            <label className="block text-gray-700 font-medium">
              Service Type
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border ${
                errors.serviceType ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring focus:ring-yellow-500 outline-none`}
            >
              <option value="">Select Service</option>
              <option value="breakdown">Breakdown Recovery</option>
              <option value="towing">Towing Service</option>
              <option value="transport">Vehicle Transport</option>
              <option value="removals">Home/Commercial Removals</option>
            </select>
            {errors.serviceType && (
              <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
            )}
          </div>
          {/* vehicle details */}
          <div>
            <label className="block text-gray-700 font-medium">
              Vehicle Details
            </label>
            <input
              type="text"
              name="vehicleDetails"
              value={formData.vehicleDetails}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border ${
                errors.vehicleDetails ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring focus:ring-yellow-500 outline-none`}
            />
            {errors.vehicleDetails && (
              <p className="text-red-500 text-sm mt-1">
                {errors.vehicleDetails}
              </p>
            )}
          </div>

          {/** Pickup Location */}
          <div>
            <label className="block text-gray-700 font-medium">
              Pickup Location
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border ${
                errors.pickupLocation ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring focus:ring-yellow-500 outline-none`}
            />
            {errors.pickupLocation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.pickupLocation}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Dropoff Location
            </label>
            <input
              type="text"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border ${
                errors.dropoffLocation ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring focus:ring-yellow-500 outline-none`}
            />
            {errors.dropoffLocation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.dropoffLocation}
              </p>
            )}
          </div>

          {/** Submit Button */}
          <button
            type="submit"
            disabled={
              Object.values(errors).some((error) => error) ||
              Object.values(formData).some((val) => !val)
            }
            className={`w-full bg-yellow-500 text-gray-900 py-3 rounded-md font-semibold transition-all ${
              Object.values(errors).some((error) => error) ||
              Object.values(formData).some((val) => !val)
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-yellow-400"
            }`}
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
