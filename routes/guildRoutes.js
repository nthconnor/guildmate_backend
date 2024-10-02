import express from "express";
import { createGuild, updateGuild, deleteGuild, getGuildById ,getUserGuilds } from "../controllers/guildController.js";
import { authenticateJWT } from "../middleware/auth.js";

const router = express.Router();

router.post('/create', authenticateJWT, createGuild)
router.put("/:id", updateGuild)
router.delete("/:id", deleteGuild)
router.get("/:id", getGuildById) 
router.get('/users/:id', authenticateJWT, getUserGuilds) // maybe move to user routes

export default router;