import "reflect-metadata";
import express from "express";
import { connectDB } from "./database";
import { Routes } from "./routes";

connectDB();

const app = express();
app.use(express.json());
Routes(app);

export default app;
