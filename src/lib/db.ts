import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is required. Please set it in your environment variables.");
  }

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("MongoDB connection established.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}
