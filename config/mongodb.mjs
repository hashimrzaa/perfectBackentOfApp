import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectDB = async () => {
  try {
    const connectHrDb = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
export default ConnectDB;
