import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";



export const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { fullName, email, phone, password, role } = req.body;
  const exists = await User.findOne({ email });
  if (exists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({ fullName,  email, phone, password, role });
  res.status(201).json({ ok: true, message: "Account Created Successfully", user:user});
});



export const LoginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    let dataUser = await User.findOne({ email: req.body.email });
    if (!dataUser) return res.status(401).json({ ok: false, message: "Invalid email or password" });


    let token = jwt.sign({ fullname: dataUser.name, id: dataUser._id, role: dataUser.role }, 'shhhhh');
    console.log(token);

    res.cookie("token", token, {
      httpOnly: true,   // Prevents JavaScript access (more secure)
      secure: true,     // Ensures cookie is only sent over HTTPS
      sameSite: "None", // Allows cross-site cookies (required for third-party cookies)
    });


    return res.status(200).json({ ok: true, message: "Login Successful", user: dataUser });

  } catch (error) {
    console.error("Error Logging in:", error);
    return res.status(500).json({ ok: false, message: "Error logging user" });
  }
});


// // logout an account
// app.get('/logout', (req, res) => {
//   res.cookie("token", "", {
//     httpOnly: true,   // Prevents JavaScript access (more secure)
//     secure: true,     // Ensures cookie is only sent over HTTPS
//     sameSite: "None", // Allows cross-site cookies (required for third-party cookies)
//   });
//   res.json({ message: "Logged out successfully" });
// });
// @desc Get all users
// @route GET /api/users
// @access Admin
// export const getUsers = asyncHandler(async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });