import express from "express";
import users from "./user.mjs";
import orders from "./order.mjs";
import ads from "./ads.mjs";
import products from "./product.mjs";
const router = express.Router();

router.use("/users", users);
router.use("/orders", orders);
router.use("/ads", ads);
router.use("/products", products);

export default router;
