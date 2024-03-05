import express from "express";
import Orders from "../models/order.mjs";
const route = express.Router();

route.post("/", async (req, res) => {
  try {
    const orders = await Orders.create(req.body);
    res.status(200).send({ message: "order added successfully" });
  } catch (error) {
    res.status(400).send({ message: "order not added", error: error });
  }
});

route.get("/", async (req, res) => {
  try {
    const orders = await Orders.find({});
    res.send({ orders: orders });
  } catch (error) {
    res.status(404).send({ message: "orders not found", error: error });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await Orders.findByIdAndDelete(id);
    res.send({ message: "orders delete successfully" });
  } catch (error) {
    res.status(404).send({ message: "orders id not found", error: error });
  }
});
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await Orders.findByIdAndUpdate(id, req.body);
    res.send({ message: "orders update successfully", orders: orders });
  } catch (error) {
    res.status(404).send({ message: "user id not found", error: error });
  }
});

export default route;
