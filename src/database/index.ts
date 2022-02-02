import { createConnection } from "typeorm";

export const connectDB = () => {
  createConnection().then(() => {
    console.log("DB Connected");
  });
};
