import mongoose from "mongoose";

const therapistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  certifications: [{ type: String }], 
  experienceYears: { type: Number, default: 0 },
  specialties: [{ type: String }], 
  bio: { type: String }, 
  availableDays: [{ 
    type: String, 
    enum: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] 
  }],
  availableTimeSlots: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

const Therapist = mongoose.model("Therapist", therapistSchema);
export default Therapist;
