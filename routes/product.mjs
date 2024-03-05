import express from "express";
const route = express.Router();
const data = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    ],
  },
];
route.get("/", (req, res) => {
  try {
    res.status(200).send({ message: "Products get successfully", data: data });
  } catch (error) {
    res.status(404).send({ message: "Products not found", error: error });
  }
});
route.get("/single", (req, res) => {
  try {
    res.status(200).send({ message: "Product get successfully", data: data });
  } catch (error) {
    res.status(404).send({ message: "Product not found", error: error });
  }
});
export default route;
