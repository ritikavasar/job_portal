import mongoose from "mongoose";

const connectDB = (url) => {
  console.log("Attempting to connect to MongoDB...");
  return mongoose
    .connect(url)
    .then(() => {
      console.log("✓ MongoDB connected successfully!");
    })
    .catch((err) => {
      console.log("✗ MongoDB connection failed:", err.message);
      throw err;
    });
};
export default connectDB;
