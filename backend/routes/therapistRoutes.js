import express from "express";
import { addTherapist, getTherapists } from "../controllers/therapistController.js";

const router = express.Router();

router.post("/", addTherapist);
router.get("/", getTherapists);

export default router;
