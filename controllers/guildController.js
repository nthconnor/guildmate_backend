import Guild from "../models/Guild.js";

export const createGuild = async (req, res) => {
  try {
    const { name, description = "", tags = [] } = req.body;
    const ownerId = req.userId;

    const newGuild = new Guild({
      name,
      description,
      tags,
      owner: ownerId,
      members: [ownerId],
      invites: [],
    });

    console.log("Creating guild with owner ID:", ownerId);

    await newGuild.save();

    res.status(201).json({
      message: "Guild created successfully",
      guild: newGuild,
    });
  } catch (error) {
    console.error("Error creating guild:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserGuilds = async (req, res) => {
  try {
    const userId = req.params.id;
    const guilds = await Guild.find({ members: userId }).populate("owner members");

    if (!guilds || guilds.length === 0) {
      return res.status(404).json({ error: "No guilds found for this user" });
    }
    
    res.json(guilds);
  } catch (error) {
    console.error("Error fetching user guilds:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
