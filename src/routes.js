import express from "express";

// import product controller
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "./controllers/product.js";

const router = express.Router();

router.post("/product", createProduct); // create product
router.patch("/product/:id", updateProduct); // update product
router.get("/product", getProducts); // get all products
router.delete("/product/:id", deleteProduct); // delete product

export default router;
