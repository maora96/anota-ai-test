import mongoose from "../utils/database.js";
import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description, category, price } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  const updatedProduct = { title, description, price, category };
  await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
  res.status(200).json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  await Product.findByIdAndRemove(id);
  res.json({ message: "Post deleted." });
};
