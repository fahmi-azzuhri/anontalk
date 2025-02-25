import express from "express";
import { sendMessage, getMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/sendMessage", sendMessage);
router.get("/getAllMessage", getMessages);

export default router;
