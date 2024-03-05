import express from "express";
import Users from "../models/user.mjs";
const route = express.Router();

route.post("/", async (req, res) => {
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

export default route;
