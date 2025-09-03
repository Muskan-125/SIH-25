import Therapist from "../models/Therapist.js";
import asyncHandler from "express-async-handler";

// @desc Add new therapist profile
// @route POST /api/therapists
// @access Admin
export const addTherapist = asyncHandler(async (req, res) => {
  const { user, certifications, experienceYears, specialties, bio, availableDays, availableTimeSlots } = req.body;

  const therapist = await Therapist.create({ 
    user, certifications, experienceYears, specialties, bio, availableDays, availableTimeSlots 
  });

  res.status(201).json(therapist);
});

// @desc Get all therapists
// @route GET /api/therapists
// @access Public
export const getTherapists = asyncHandler(async (req, res) => {
  const therapists = await Therapist.find().populate("user", "firstName lastName email phone");
  res.json(therapists);
});
