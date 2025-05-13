import express from "express";
import {
  getBoards,
  createBoard,
  deleteBoard,
  editBoard,
  getBoardById,
  getBoardsName,
} from "../controllers/board.controller";
import protectRoute from "../middlewares/protectRoute";
const router = express.Router();

router.get("/", protectRoute, getBoards);
router.get("/boardsName", protectRoute, getBoardsName);
router.get("/find/:boardId", protectRoute, getBoardById);
router.post("/", protectRoute, createBoard);
router.put("/:boardId", protectRoute, editBoard);
router.delete("/:boardId", protectRoute, deleteBoard);

export default router;
