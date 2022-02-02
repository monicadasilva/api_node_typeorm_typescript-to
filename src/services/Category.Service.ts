import { Category } from "../entities/Category";
import { getRepository } from "typeorm";

interface Body {
  name?: string;
  description?: string;
}

export const CreateCategoryService = async (body: Body) => {
  const repo = getRepository(Category);
  const { name, description } = body;

  const findCategory = await repo.findOne({ name });

  if (findCategory?.name === name) {
    throw new Error("Category already existes.");
  }

  const category = repo.create({
    name,
    description,
  });

  await repo.save(category);
  return category;
};

export const ReadAllCategoriesService = async () => {
  const repo = getRepository(Category);
  const category = await repo.find();

  return category;
};

export const ReadOneCategoryService = async (id: string) => {
  try {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);
    return category;
  } catch (err) {
    return { error: "Category not found." };
  }
};

export const UpdateCategoryService = async (body: Body, id: string) => {
  const repo = getRepository(Category);

  const { name, description } = body;

  const currentCategory = await repo.findOne(id);

  if (currentCategory.id !== id) {
    throw new Error("User not found!");
  }
  if (currentCategory.name === name) {
    throw new Error("Category name already existes.");
  }

  const date = new Date();
  const today = date.toISOString();

  await repo.update(id, {
    name: name ? name : currentCategory.name,
    description: description ? description : currentCategory.description,
    updatedAt: today,
  });
  const updatedCategory = repo.findOne(id);

  return updatedCategory;
};

export const DeleteCategoryService = async (id: string) => {
  try {
    const repo = getRepository(Category);

    await repo.delete(id);

    return { message: "Category deleted." };
  } catch (err) {
    return { error: "Category not found." };
  }
};
