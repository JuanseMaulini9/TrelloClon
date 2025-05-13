import express from "express";
import {
  getTask,
  createTask,
  deleteTask,
  editTask,
  addChecked,
  editedChecked,
} from "../controllers/task.controller";
import protectRoute from "../middlewares/protectRoute";

const router = express.Router();
//tasks
router.get("/getTask", protectRoute, getTask);
router.post("/createTask", protectRoute, createTask);
router.delete("/deleteTask", protectRoute, deleteTask);
router.put("/editTask", protectRoute, editTask);
//checkboxs
router.post("/addChecked", protectRoute, addChecked);
router.put("/editedChecked", protectRoute, editedChecked);

export default router;
