import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
        minlength: 6
    },
    avatar: {
        type: String,
        default: "",
    },
});

const User = mongoose.model("User", UserSchema);

export default User;