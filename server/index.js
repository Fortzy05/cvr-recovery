import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@sanity/client";

dotenv.config();

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Setup Sanity client
const sanity = createClient({
  projectId: "rewsmzz2",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_WRITE_TOKEN, 
});

// ✅ Booking endpoint
app.post("/api/bookings", async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      serviceType,
      pickupLocation,
      dropoffLocation,
      vehicleDetails,
    } = req.body;

    // Minimal check
    if (!name || !phone || !email) {
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
    }

    const doc = {
      _type: "booking",
      name,
      phone,
      email,
      serviceType,
      pickupLocation,
      dropoffLocation,
      vehicleDetails,
      createdAt: new Date().toISOString(),
    };

    const result = await sanity.create(doc);

    return res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.error("❌ Server error:", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
});

// 🟡 Quote form endpoint (just add this below)
app.post("/api/quotes", async (req, res) => {
    const { fullName, phoneNumber, serviceRequired, additionalInfo } = req.body;
  
    try {
      const quote = await sanity.create({
        _type: "quote",
        fullName,
        phoneNumber,
        serviceRequired,
        additionalInfo,
      });
  
      res.status(201).json({ message: "Quote created", quote });
    } catch (error) {
      console.error("❌ Quote submission failed:", error.message);
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
      const contact = await sanity.create({
        _type: "contact",
        name,
        email,
        message,
      });

      res.status(201).json({ message: "Contact message sent", contact });
    } catch (error) {
      console.error("❌ Contact submission failed:", error.message);
      res.status(500).json({ error: error.message });
    }
  });
  
  
// ✅ Start server
app.listen(PORT, () => {
  console.log(`Booking API server running on http://localhost:${PORT}`);
});
