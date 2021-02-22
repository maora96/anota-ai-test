import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
});

const product = mongoose.model("product", productSchema);

export default product;
