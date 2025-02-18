import express from "express";
import {
  createAdmin,
  loginAdmin,
  logoutAdmin,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/onlyadmin/register-admin", createAdmin);
router.post("/onlyadmin/login-admin", loginAdmin);
router.post("/logout", logoutAdmin);

export default router;
