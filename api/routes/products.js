import express from "express";
import { getProducts } from "../controllers/products.js";

const productsRouter = express.Router();

productsRouter.get("/products", getProducts);

export default productsRouter;