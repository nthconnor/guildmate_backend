import mongoose from "mongoose";

async function connectToMongo() {
    try {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log("Connected to mongodb");
    } catch (err) {
      console.error("Connection error: ", err.message);
    }
  }

export default connectToMongo