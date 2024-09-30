import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minglength: 6
    },
    avatar: {
        type: String,
        default: "",
    },
});

const User = mongoose.model("User", userSchema);

export default User;