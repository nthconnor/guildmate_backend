import Guild from "../models/Guild.js";

export const createGuild = async (req, res) => {
  try {
    const { name, description = "", tags = [], logo } = req.body;
    const ownerId = req.userId;

    const newGuild = new Guild({
      name,
      description,
      tags,
      logo,
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

export const updateGuild = async (req, res) => {
  try {
    const guildId = req.params.id;
    const { name, description, tags, logo } = req.body;

    const updatedGuild = await Guild.findByIdAndUpdate(
      guild,
      Id,
      { name, description, tags, logo },
      { new: true }
    );

    if (!updatedGuild) {
      return res.status(404).json({ error: "Guild not found" });
    }
    res.json({ message: "Guild updated", guild: updatedGuild });
  } catch (error) {
    console.error("Error updating:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteGuild = async (req, res) => {
  try {
    const guildId = req.params.id;

    const deletedGuild = await Guild.findByIdAndDelete(guildId);

    if (!deletedGuild) {
      return res.status(404).json({ error: "Guild not found" });
    }

    res.json({ message: "Guild deleted successfully" });
  } catch (error) {
    console.error("Error deleting guild:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getGuildById = async (req, res) => {
  try {
    const guildId = req.params.id;
    const guild = await Guild.findById(guildId).populate("owner members");

    if (!guild) {
      return res.status(404).json({ error: "Guild not found" });
    }

    res.json(guild);
  } catch (error) {
    console.error("Error fetching guild:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserGuilds = async (req, res) => {
  try {
    const userId = req.params.id;
    const guilds = await Guild.find({ members: userId }).populate(
      "owner members"
    );

    if (!guilds || guilds.length === 0) {
      return res.status(404).json({ error: "No guilds found for this user" });
    }

    res.json(guilds);
  } catch (error) {
    console.error("Error fetching user guilds:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
