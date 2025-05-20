import { Request, Response } from "express";

import {
  createTask,
  deleteTask,
  getAllTasksByBoardId,
  updatetask,
} from "../models/task.model";

export async function getTaskController(req: Request, res: Response) {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }

  const { boardId } = req.body;

  if (!boardId) {
    return res.status(400).json({ message: "BoardId invalido" });
  }

  try {
    const tasks = await getAllTasksByBoardId(boardId);
    return res.status(200).json({ tasks: tasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function createTaskController(req: Request, res: Response) {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }

  const { boardId, title, description, state, type, priority, limitTime } =
    req.body;

  if (!boardId || typeof boardId !== "number") {
    return res
      .status(400)
      .json({ message: "boardId es requerido y debe ser un número" });
  }

  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({ message: "title es requerido y debe ser una cadena" });
  }

  if (!state || typeof state !== "string") {
    return res
      .status(400)
      .json({ message: "state es requerido y debe ser una cadena" });
  }

  if (limitTime && isNaN(new Date(limitTime).getTime())) {
    return res
      .status(400)
      .json({ message: "limitTime debe ser una fecha válida" });
  }

  try {
    const newTask = await createTask(
      userLogged.id,
      boardId,
      state,
      title,
      description,
      type,
      priority,
      limitTime
    );
    return res.status(201).json({ newTask: newTask });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function deleteTaskController(req: Request, res: Response) {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }

  const { taskId } = req.body;

  if (!taskId || typeof taskId !== "number") {
    return res
      .status(400)
      .json({ message: "taskId es requerido y debe ser un número" });
  }

  await deleteTask(taskId);
  return res.status(200).json({ message: `Se borro la tarea` });
}

export async function updateTaskController(req: Request, res: Response) {
  const userLogged = req.user;

  if (!userLogged) {
    return res.status(401).json({ message: "No hay usuario loggeado" });
  }

  const { boardId, title, description, state, type, priority, limitTime } =
    req.body;

  if (!boardId || typeof boardId !== "number") {
    return res
      .status(400)
      .json({ message: "boardId es requerido y debe ser un número" });
  }

  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({ message: "title es requerido y debe ser una cadena" });
  }

  if (!state || typeof state !== "string") {
    return res
      .status(400)
      .json({ message: "state es requerido y debe ser una cadena" });
  }

  if (limitTime && isNaN(new Date(limitTime).getTime())) {
    return res
      .status(400)
      .json({ message: "limitTime debe ser una fecha válida" });
  }

  try {
    const updatedTask = await updatetask(
      boardId,
      title,
      description,
      state,
      type,
      priority,
      limitTime
    );
    return res.status(200).json({ updatedTask: updatedTask });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}
