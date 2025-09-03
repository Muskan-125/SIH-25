import Booking from "../models/Booking.js";
import asyncHandler from "express-async-handler";

// @desc Create a new booking
// @route POST /api/bookings
// @access Public
export const createBooking = asyncHandler(async (req, res) => {
  const { patient, therapist, therapy, preferredDate, preferredTime, notes } = req.body;

  const booking = await Booking.create({ patient, therapist, therapy, preferredDate, preferredTime, notes });
  res.status(201).json(booking);
});

// @desc Get all bookings
// @route GET /api/bookings
// @access Admin
export const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find()
    .populate("patient", "firstName lastName email")
    .populate("therapist", "user specialties");
  res.json(bookings);
});
