import express from "express";
import { registerUser, LoginUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User route is running");
});
router.post("/signup", registerUser);
router.post("/login", LoginUser);

export default router;
