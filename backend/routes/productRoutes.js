import express from "express";

import { addProduct,      getProductList, getProductsByCategory, getProductsBySubcategory} from "../controllers/productController.js";

const router = express.Router();


router.post("/addproduct", addProduct);
router.get("/getproductList", getProductList);
router.get('/get-products-by-subcategory/:id', getProductsBySubcategory);
router.get('/get-products-by-category/:id', getProductsByCategory);


export default router;