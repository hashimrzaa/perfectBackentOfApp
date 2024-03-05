import mongoose from "mongoose";
const adsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
amount: {
    type: Number,
    required: true
},
});

const Ads = mongoose.model("ads", adsSchema);

export default Ads;
