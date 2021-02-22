import mongoose from "../utils/database.js";
import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  const product = req.body;

  // create new product from request
  const newProduct = new Product(product);

  try {
    // save new product to database
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  const { title = null, category = null } = req.query;
  try {
    if (title && category === null) {
      // if only title is provided to filter products
      const products = await Product.find({ title: title });
      res.status(200).json(products);
    } else if (category && title === null) {
      // if only category is provided to filter products
      const products = await Product.find({ category: category });
      res.status(200).json(products);
    } else if (category && title) {
      // if both category and title are provided to filter products
      const products = await Product.find({
        $and: [{ title: title }, { category: category }],
      });
      res.status(200).json(products);
    } else {
      // if no title or category is provided to filter products (get all products)
      const products = await Product.find();
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description, category, price } = req.body;

  // check if there is a prodcut with this id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  const updatedProduct = { title, description, price, category };
  await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
  res.status(200).json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  // check if there is a prodcut with this id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  await Product.findByIdAndRemove(id);
  res.json({ message: "Post deleted." });
};
