import express from "express";
import {
  createAdmin,
  loginAdmin,
  logoutAdmin,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", createAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);

export default router;
