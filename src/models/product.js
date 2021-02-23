import mongoose from "mongoose";
import { categorySchema } from "./category.js";

const productSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: [categorySchema],
});

const Product = mongoose.model("product", productSchema);

export default Product;
