import { Router } from "express";
import {
  CreateVideo,
  DeleteVideo,
  GetAllVideos,
  GetOneVideo,
  UpdateVideo,
} from "../controllers/Videos.Controller";
import { Validate } from "../middlewares/Validation.Middleware";
import { VideoSchema } from "../schemas/Video.Schema";

const router = Router();

export const VideoRoutes = () => {
  router.post("", Validate(VideoSchema), CreateVideo);
  router.get("", GetAllVideos);
  router.get("/:id", GetOneVideo);
  router.patch("/:id", Validate(VideoSchema), UpdateVideo);
  router.delete("/:id", DeleteVideo);

  return router;
};
