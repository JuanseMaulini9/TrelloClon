import express from "express";
import {
  getBoardsController,
  createBoardController,
  updateBoardController,
  deleteBoardController,
} from "../controllers/board.controller";
import protectRoute from "../middlewares/protectRoute";
const router = express.Router();

router.get("/", protectRoute, getBoardsController);
router.post("/", protectRoute, createBoardController);
router.put("/:boardId", protectRoute, updateBoardController);
router.delete("/:boardId", protectRoute, deleteBoardController);

export default router;
