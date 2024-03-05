import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  addId: {
    required: true,
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  userId: {
    required: true,
    type: String,
  },
});

const Orders = mongoose.model("orders", orderSchema);

export default Orders;
