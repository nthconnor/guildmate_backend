import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("db connected")
    } catch (error) {
        console.log("Error connecting to db", error.message)
    }
}

export default connectToMongoDB