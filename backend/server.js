import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.js";
import mongoose from "mongoose";

import productRoutes from "./routes/product.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.use("/api/products", productRoutes);//uses /api/products as a prefix for all endpoints(just tidies uo the code nothing much)

// Start the Server
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:"+ PORT);
});
