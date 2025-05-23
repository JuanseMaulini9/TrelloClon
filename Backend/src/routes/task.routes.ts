import express from "express";
import {
  getTaskController,
  createTaskController,
  deleteTaskController,
  updateTaskController,
} from "../controllers/task.controller";
import protectRoute from "../middlewares/protectRoute";

const router = express.Router();

router.get("/getTask", protectRoute, getTaskController);
router.post("/createTask", protectRoute, createTaskController);
router.delete("/deleteTask", protectRoute, deleteTaskController);
router.put("/updateTask", protectRoute, updateTaskController);

export default router;
