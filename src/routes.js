import express from "express";

// import product controller

const router = express.Router();

router.post("/product"); // create product
router.put("/product/:id"); // update product
router.get("/product"); // get all products
router.delete("/product/:id"); // delete product

export default router;
