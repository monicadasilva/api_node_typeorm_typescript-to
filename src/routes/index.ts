import { CategoryRoutes } from "./Category.Router";
import { Express } from "express";
import { VideoRoutes } from "./Video.Router";

export const Routes = (app: Express) => {
  app.use("/api/category", CategoryRoutes());
  app.use("/api/videos", VideoRoutes());
};
