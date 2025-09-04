import mongoose from "mongoose";

const therapistSchema = new mongoose.Schema(
  {
    // Relation to User
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Core Profile Fields (from TherapistCardProps)
    name: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: Number,
      required: true,
      min: 0,
    },
    clinic: {
      type: String,
      required: true,
      trim: true,
    },
    specializations: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
      min: 0,
    },
    image: {
      type: String, // URL of profile picture
      required: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },

    // Extra Fields (from old schema, kept for compatibility)
    certifications: [
      {
        type: String,
      },
    ],
    bio: {
      type: String,
    },
    availableDays: [
      {
        type: String,
        enum: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    ],
    availableTimeSlots: [
      {
        type: String, // e.g. "10:00 AM - 12:00 PM"
      },
    ],

    // Metadata
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  
);

const Therapist = mongoose.model("Therapist", therapistSchema);

export default Therapist;
