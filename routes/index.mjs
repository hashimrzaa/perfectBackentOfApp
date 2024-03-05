import express from "express";
import users from "./user.mjs";
import orders from "./order.mjs";
import ads from "./ads.mjs";
const router = express.Router();

router.use("/users", users);
router.use("/orders", orders);
router.use("/ads", ads);

export default router;
