import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

interface Body {
  name?: string;
  description?: string;
  category?: string;
  duration?: number;
}

export const CreateVideoService = async (body: Body) => {
  const repo = getRepository(Video);
  const repoCategory = getRepository(Category);
  const { name, description, category, duration } = body;

  const findVideo = await repo.findOne({ name });
  const findCategory = await repoCategory.findOne({ name: category });

  if (findVideo?.name === name) {
    throw new Error("Video already existes.");
  }

  if (findCategory === undefined) {
    throw new Error("This category does not exist.");
  }

  const video = repo.create({
    name,
    description,
    category_id: findCategory.id,
    duration,
  });

  await repo.save(video);
  return video;
};

export const ReadAllVideosService = async () => {
  const repo = getRepository(Video);
  const video = await repo.find({ relations: ["category"] });

  return video;
};

export const ReadOneVideoService = async (id: string) => {
  try {
    const repo = getRepository(Video);

    const video = await repo.findOne(id, { relations: ["category"] });
    return video;
  } catch (err) {
    return { error: "Video not found." };
  }
};

export const UpdateVideoService = async (body: Body, id: string) => {
  const repo = getRepository(Video);
  const repoCategory = getRepository(Category);

  const { name, description, duration, category } = body;

  const currentVideo = await repo.findOne(id);
  const newCategory = await repoCategory.findOne({ name: category });

  if (currentVideo.id !== id) {
    throw new Error("User not found!");
  }
  if (newCategory === undefined) {
    throw new Error("Category not registered!");
  }
  if (currentVideo.name === name) {
    throw new Error("Video name already existes.");
  }

  await repo.update(id, {
    name: name ? name : currentVideo.name,
    description: description ? description : currentVideo.description,
    duration: duration ? duration : currentVideo.duration,
    category_id: category ? newCategory.id : currentVideo.category_id,
  });
  const updatedVideo = repo.findOne(id);

  return updatedVideo;
};

export const DeleteVideoService = async (id: string) => {
  try {
    const repo = getRepository(Video);

    await repo.delete(id);

    return { message: "Video deleted." };
  } catch (err) {
    return { error: "Video not found." };
  }
};
