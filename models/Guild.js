import mongoose from "mongoose";

const GuildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  logo: {
    type: String,
    default: "",
  },
  tags: {
    type: [String]
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
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
        // unique: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        expires: "1d", // can change ?
      },
    },
  ],
}, { timestamps: true });

const Guild = mongoose.model("Guild", GuildSchema);
export default Guild;
