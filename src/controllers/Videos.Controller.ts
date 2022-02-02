import { Request, Response } from "express";
import {
  CreateVideoService,
  DeleteVideoService,
  ReadAllVideosService,
  ReadOneVideoService,
  UpdateVideoService,
} from "../services/Videos.Service";

export const CreateVideo = async (req: Request, res: Response) => {
  try {
    const video = await CreateVideoService(req.body);
    res.status(201).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const GetAllVideos = async (req: Request, res: Response) => {
  const video = await ReadAllVideosService();
  res.status(200).json(video);
};

export const GetOneVideo = async (req: Request, res: Response) => {
  try {
    const video = await ReadOneVideoService(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const UpdateVideo = async (req: Request, res: Response) => {
  try {
    const video = await UpdateVideoService(req.body, req.params.id);
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const DeleteVideo = async (req: Request, res: Response) => {
  try {
    const video = await DeleteVideoService(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
