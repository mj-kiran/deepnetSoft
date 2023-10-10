
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import categoryRouter from "./routes/categoryRoutes.js";
import subcategoryRouter from "./routes/subcategoryRoutes.js";
import productRouter from "./routes/productRoutes.js";
import db from "./db/connection.js";



dotenv.config();

db()

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/categories", categoryRouter);
app.use("/api/categories/subcategory", subcategoryRouter);

app.use("/api/products", productRouter);



app.listen(3300, () => {
  console.log("server started at 3300");
});
