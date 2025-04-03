import express from "express"; 
import mongoose from "mongoose";
import Product from "../models/product.js";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router(); 

export default router;

// Get All Products endpoint
router.get("/", getProducts);

// Create a New Product endpoint
router.post('/', createProduct);

// Update a Product endpoint
router.put("/:id", updateProduct);

// Delete a Product endpoint
router.delete("/:id", deleteProduct);
