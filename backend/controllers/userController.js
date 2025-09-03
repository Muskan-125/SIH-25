import User from "../models/User.js";
import asyncHandler from "express-async-handler";

// @desc Register a new user
// @route POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { fullName,  email, phone, password, role } = req.body;

  const exists = await User.findOne({ email });
  if (exists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ firstName, lastName, email, phone, password, role });
  res.status(201).json(user);
});

// @desc Get all users
// @route GET /api/users
// @access Admin
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
});
