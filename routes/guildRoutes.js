import express from "express";
import { createGuild, getUserGuilds } from "../controllers/guildController.js";
import { authenticateJWT } from "../middleware/auth.js";

const router = express.Router();

router.post('/create', authenticateJWT, createGuild)
router.get('/users/:id', authenticateJWT, getUserGuilds)

export default router;