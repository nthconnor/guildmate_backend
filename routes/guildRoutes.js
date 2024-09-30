import express from "express";
import { createGuild } from "../controllers/guildController.js";
import { authenticateJWT } from "../middleware/auth.js";

const router = express.Router();

router.post('/create', authenticateJWT, createGuild)

export default router;