import express from "express";
import {
  getBloodBank,
  getBloodBanks,
} from "../controllers/bloodBank.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getBloodBank);
router.get("/", verifyToken, getBloodBanks);

export default router;
