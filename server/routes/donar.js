import express from "express";
import {
  getDonor,
  updateDonationCount,
  addAppointment,
} from "../controllers/donar.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getDonor);

/* UPDATE */
router.patch("/:id/donations", verifyToken, updateDonationCount);
router.post("/:id/appointments", verifyToken, addAppointment);

export default router;