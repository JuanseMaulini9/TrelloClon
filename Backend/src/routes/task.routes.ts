import express from "express";
import {
  getTaskController,
  createTaskController,
  deleteTaskController,
  updateTaskController,
  changeStateTaskController,
  createMiniTaskController,
} from "../controllers/task.controller";
import protectRoute from "../middlewares/protectRoute";

const router = express.Router();

router.get("/getTask/:boardId", protectRoute, getTaskController);
router.post("/createTask", protectRoute, createTaskController);
router.post("/createMiniTask", protectRoute, createMiniTaskController);
router.delete("/deleteTask", protectRoute, deleteTaskController);
router.put("/updateTask", protectRoute, updateTaskController);
router.put("/updateStateTask", protectRoute, changeStateTaskController);

export default router;
