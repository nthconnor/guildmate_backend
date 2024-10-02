import express from "express";
import { createGuild, getGuildById ,getUserGuilds } from "../controllers/guildController.js";
import { authenticateJWT } from "../middleware/auth.js";

const router = express.Router();

router.post('/create', authenticateJWT, createGuild)
router.get("/:id", getGuildById) 
router.get('/users/:id', authenticateJWT, getUserGuilds) // maybe move to user routes

export default router;