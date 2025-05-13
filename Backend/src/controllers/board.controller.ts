import express, { Request, Response } from "express";
import Board from "../schemas/board.schema";
import User from "../schemas/user.schema";

export const getBoards = async (req: Request, res: Response) => {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }
  try {
    const userBoards = await Board.find({ user: userLogged._id })
      .populate("user", "username")
      .populate("tasks");
    if (userBoards) {
      return res.status(200).json({ userBoards });
    } else
      return res.status(404).json({ message: "No se encontraron tableros" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: "error" });
    }
  }
};

export const getBoardById = async (req: Request, res: Response) => {
  const { boardId } = req.params;

  try {
    const board = await Board.findById(boardId)
      .populate("user", "username")
      .populate("tasks");

    if (board) {
      return res.status(200).json({ board });
    } else
      return res.status(404).json({ message: "No se encontraron tableros" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: "error" });
    }
  }
};

export const getBoardsName = async (req: Request, res: Response) => {
  const userLogged = req.user;

  try {
    const boards = await Board.find({ user: userLogged._id }).select(
      "_id nameBoard"
    );
    if (boards) {
      return res.status(200).json({ boards });
    } else throw new Error("boards no encotrados");
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: "error" });
    }
  }
};

export const createBoard = async (req: Request, res: Response) => {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }
  try {
    const { nameBoard } = req.body;
    const newBoard = new Board({
      nameBoard,
      user: userLogged._id,
      tasks: [],
    });

    await newBoard.save();

    await User.findByIdAndUpdate(userLogged._id, {
      $push: { boards: newBoard._id },
    });

    const newBoardResponse = {
      _id: newBoard._id,
      nameBoard: newBoard.nameBoard,
    };

    res.status(200).json(newBoardResponse);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error });
    }
  }
};

export const editBoard = async (req: Request, res: Response) => {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }

  try {
    const { newBoardName } = req.body;
    const { boardId } = req.params;

    const updateBoard = await Board.findByIdAndUpdate(boardId, {
      nameBoard: newBoardName,
    });

    res.status(200).json({ message: "board actualizado", updateBoard });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error });
    }
  }
};

export const deleteBoard = async (req: Request, res: Response) => {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }
  try {
    const { boardId } = req.params;

    const boardDelete = await Board.findByIdAndDelete(boardId);
    if (!boardDelete) {
      return res.status(404).json({ message: "Board no encontrado" });
    }
    await User.findByIdAndUpdate(boardDelete.user, {
      $pull: { boards: boardId },
    });

    res.status(200).json({ message: "board deleted", boardDelete });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error });
    }
  }
};
