import Guild from "../models/Guild.js";

export const createGuild = async (req, res) => {
  try {
    const { name } = req.body;
    const ownerId = req.userId;

    const newGuild = new Guild({
      name,
      owner: ownerId,
      members: [ownerId],
    });

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
