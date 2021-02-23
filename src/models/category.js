import mongoose from "mongoose";

export const categorySchema = mongoose.Schema({
  category: String,
});

export const Category = mongoose.model("category", categorySchema);
