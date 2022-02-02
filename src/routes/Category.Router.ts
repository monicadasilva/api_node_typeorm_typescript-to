import { Router } from "express";
import {
  CreateCategory,
  DeleteCategory,
  GetAllCategories,
  GetOneCategory,
  UpdateCategory,
} from "../controllers/Category.Controller";
import { Validate } from "../middlewares/Validation.Middleware";
import { CategorySchema } from "../schemas/Category.Schema";

const router = Router();

export const CategoryRoutes = () => {
  router.post("", Validate(CategorySchema), CreateCategory);
  router.get("", GetAllCategories);
  router.get("/:id", GetOneCategory);
  router.patch("/:id", Validate(CategorySchema), UpdateCategory);
  router.delete("/:id", DeleteCategory);

  return router;
};
