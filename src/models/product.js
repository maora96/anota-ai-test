import mongoose from "mongoose";

const productSchema = mongoose.Schema({});

const product = mongoose.model("product", productSchema);
