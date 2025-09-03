import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Routes
import userRoutes from "./routes/userRoutes.js";
import therapistRoutes from "./routes/therapistRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/users", userRoutes);
app.use("/api/therapists", therapistRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => res.send("Panchakarma Backend Running 🚀"));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
