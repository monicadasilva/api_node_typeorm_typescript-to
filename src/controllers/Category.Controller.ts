import { Request, Response } from "express";
import {
  CreateCategoryService,
  DeleteCategoryService,
  ReadAllCategoriesService,
  ReadOneCategoryService,
  UpdateCategoryService,
} from "../services/Category.Service";

export const CreateCategory = async (req: Request, res: Response) => {
  try {
    const category = await CreateCategoryService(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const GetAllCategories = async (req: Request, res: Response) => {
  const category = await ReadAllCategoriesService();
  res.status(200).json(category);
};

export const GetOneCategory = async (req: Request, res: Response) => {
  try {
    const category = await ReadOneCategoryService(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const UpdateCategory = async (req: Request, res: Response) => {
  try {
    const category = await UpdateCategoryService(req.body, req.params.id);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const DeleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await DeleteCategoryService(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
