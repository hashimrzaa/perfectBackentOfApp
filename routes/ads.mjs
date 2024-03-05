import express from "express";
import Ads from "../models/ads.mjs";
const route = express.Router();

route.post("/", async (req, res) => {
  try {
    const ads = await Ads.create(req.body);
    res.status(200).send({ message: "Ads added successfully" });
  } catch (error) {
    res.status(400).send({ message: "Ads not added", error: error });
  }
});

route.get("/", async (req, res) => {
  try {
    const ads = await Ads.find({});
    res.send({ ads: ads });
  } catch (error) {
    res.status(404).send({ message: "ads not found", error: error });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ads = await Ads.findByIdAndDelete(id);
    res.send({ message: "ads delete successfully" });
  } catch (error) {
    res.status(404).send({ message: "ads id not found", error: error });
  }
});
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ads = await Ads.findByIdAndUpdate(id, req.body);
    res.send({ message: "ads update successfully", ads: ads });
  } catch (error) {
    res.status(404).send({ message: "ads id not found", error: error });
  }
});

export default route;
