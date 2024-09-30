import bcrypt from "bcrypt";

import User from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const { displayName, username, password, confirmPassword, avatar } =
      req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password does not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      displayName,
      username,
      password: hashedPassword,
      avatar,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      displayName: newUser.displayName,
      username: newUser.username,
      avatar: newUser.avatar,
    });
  } catch (error) {
    console.log("Error in sign up control", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = (req, res) => {
  res.send("login route");
};

export const logout = (req, res) => {
  res.send("logout route");
};
