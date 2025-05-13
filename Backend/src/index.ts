import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { UserInterface } from "./types";
import authRoutes from "./routes/auth.routes";
import boardRoutes from "./routes/board.routes";
import todoRoutes from "./routes/task.routes";
import connectToMongo from "./db/connectMongo";
import cookieParser from "cookie-parser";

declare global {
  namespace Express {
    interface Request {
      user: UserInterface;
    }
  }
}

const app = express();

dotenv.config();

const CLIENTE = process.env.CLIENTE;

app.use(cookieParser());
app.use(
  cors({
    origin: CLIENTE?.toString(),
    credentials: true,
  })
);

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/board", boardRoutes);
app.use("/api/task", todoRoutes);

// test model
import {
  init,
  createUser,
  getUserById,
  getUserByUsername,
} from "./models/user.model";

init();

// aca termina el test model
app.listen(PORT, () => {
  connectToMongo();
  console.log(`Server running on port http://localhost:${PORT}/`);
});
