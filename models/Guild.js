import mongoose from "mongoose";

const GuildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    reuired: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  invites: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      token: {
        type: String,
        unique: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        expires: "1d", // can change
      },
    },
  ],
});

const Guild = mongoose.model("Guild", GuildSchema);
export default Guild;
