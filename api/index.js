import express from "express";
import userRoutes from "./routes/user.js";
import productsRoutes from "./routes/products.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use(cors());

app.get("/user", userRoutes);
app.get("/products", productsRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
  });

app.listen(8800);
