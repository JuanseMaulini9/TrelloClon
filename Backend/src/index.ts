import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { User } from "./models/user.model";
import authRoutes from "./routes/auth.routes";
import boardRoutes from "./routes/board.routes";
import todoRoutes from "./routes/task.routes";
import cookieParser from "cookie-parser";
import { initTables } from "./services/initTables";

declare global {
  namespace Express {
    interface Request {
      user: User;
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

async function startServer() {
  try {
    await initTables();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
}

startServer();
