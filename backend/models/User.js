import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fulltName: { type: String, required: true, trim: true },
  
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true },
  password: { type: String }, 
  role: { type: String, enum: ["patient", "admin", "therapist"], default: "patient" },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;

