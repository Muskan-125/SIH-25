import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  therapist: { type: mongoose.Schema.Types.ObjectId, ref: "Therapist", required: true },
  therapy: { type: String, required: true }, 
  preferredDate: { type: Date, required: true },
  preferredTime: { type: String }, 
  status: { 
    type: String, 
    enum: ["pending", "confirmed", "completed", "cancelled"], 
    default: "pending" 
  },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
