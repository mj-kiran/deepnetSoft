import express from "express";
import {
  categorydetail,
  createCategory,
  listCategories,
} from "../controllers/categoryController.js";



const router = express.Router();



router.post('/create-Category', createCategory);
router.get("/viewCategories", listCategories);


router.get("/:id",categorydetail);

export default router;
