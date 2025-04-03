import Product from "../models/product.js"
import e from "express";
import mongoose from "mongoose";

export const getProducts =  async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products }); // ✅ Fixed status code
    } catch (error) {
        console.log("Error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


export const createProduct =  async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ success: false, message: "Request body is empty" });
        }

        const { name, price, image } = req.body;

        if (!name || !price || !image) {
            return res.status(400).json({ success: false, message: "Please provide all fields" });
        }

        const newProduct = new Product({ name, price, image });
        await newProduct.save();

        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error creating product:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


export const updateProduct =  async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ success: false, message: "Request body is empty" });
        }

        const { name, price, image } = req.body;

        if (!name || !price || !image) {
            return res.status(400).json({ success: false, message: "Please provide all fields" });
        }

        const newProduct = new Product({ name, price, image });
        await newProduct.save();

        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error creating product:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


export const deleteProduct =  async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid product ID" });
    }

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.log("Error in deleting product:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
