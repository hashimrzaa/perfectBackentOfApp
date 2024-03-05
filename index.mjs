import express from "express";
const app = express();
const port = process.env.PORT || 3002;
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/index.mjs";
import dotenv from "dotenv";
import ConnectDB from "./config/mongodb.mjs";
dotenv.config();

// Hr Middleware
app.use(cors());
app.use(express.json());

app.use("/", router);

// Hr Mongo Db

ConnectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
