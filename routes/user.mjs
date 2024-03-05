import express from "express";
import Users from "../models/user.mjs";
const route = express.Router();
route.post("/register", async (req, res) => {
  try {
    const users = await Users.create(req.body);
    res.status(200).send({ message: "user added successfully" });
  } catch (error) {
    res.status(400).send({ message: "user not added", error: error });
  }
});

route.get("/", async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).send({ users: users });
  } catch (error) {
    res.status(404).send({ message: "users not found", error: error });
  }
});
route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      res.status(404).send({ message: "User not found!" });
      return;
    }
    const isCorrectPassword = user.comparePassword(password);
    if (!isCorrectPassword) {
      res.status(400).send({ message: "Invalid Password" });
      return;
    }
    res.send({ message: "User logged in successfully!" });
  } catch (e) {
    res.send({ message: e.message });
  }
});
export default route;
