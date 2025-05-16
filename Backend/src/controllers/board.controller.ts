import { Request, Response } from "express";

import {
  getBoardsByUserId,
  createBoard,
  deleteBoard,
  updateBoard,
} from "../models/board.model";

export const getBoardsController = async (req: Request, res: Response) => {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }

  try {
    const userBoards = await getBoardsByUserId(userLogged.id);

    return res.status(200).json({ boards: userBoards });
  } catch (error) {
    console.error("Error al obtener los tableros:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const createBoardController = async (req: Request, res: Response) => {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }
  const { boardName } = req.body;

  try {
    const newBoard = await createBoard(boardName, userLogged.id);
    return res.status(201).json({ newBoard: newBoard });
  } catch (error) {
    console.error("Error al obtener los tableros:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updateBoardController = async (req: Request, res: Response) => {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }

  const { newBoardName } = req.body;
  const { boardId } = req.params;

  if (!newBoardName || typeof newBoardName !== "string") {
    return res.status(400).json({ message: "Nombre de tablero inválido" });
  }

  try {
    const updatedBoard = await updateBoard(parseInt(boardId), newBoardName);

    if (!updatedBoard) {
      return res.status(404).json({ message: "Board no encontrado" });
    }
    res.status(200).json({ message: "board actualizado", updatedBoard });
  } catch (error) {
    console.error("Error al obtener los tableros:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const deleteBoardController = async (req: Request, res: Response) => {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }

  try {
    const { boardId } = req.params;
    const boardDeleted = await deleteBoard(parseInt(boardId));

    if (boardDeleted === 0) {
      return res.status(404).json({ message: "Board no encontrado" });
    }

    return res.status(200).json({ message: "Board eliminado correctamente" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
