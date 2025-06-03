import { Request, Response } from "express";
import { signUp, logIn } from "../services/auth.services";
import { getUserById, getUserByUsername } from "../models/user.model";

import { verifyToken } from "../utils/verifyToken";

import jwt from "jsonwebtoken";

interface AuthRequestBody {
  username: string;
  password: string;
}

export async function signUpController(
  req: Request<{}, {}, AuthRequestBody>,
  res: Response
) {
  const { username, password } = req.body;

  if (typeof username !== "string" || typeof password !== "string") {
    return res.status(400).json({ message: "Parametros invalidos" });
  }

  try {
    await signUp(username, password);
    res.status(201).json({ message: "usuario creado" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function logInController(
  req: Request<{}, {}, AuthRequestBody>,
  res: Response
) {
  const { username, password } = req.body;

  if (typeof username !== "string" || typeof password !== "string") {
    return res.status(400).json({ message: "Parametros invalidos" });
  }
  try {
    const { user, token } = await logIn(username, password);
    res
      .cookie("jwt", token, {
        maxAge: 2 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ username: user.username, id: user.id });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function verifyController(req: Request, res: Response) {
  try {
    const token = req.cookies?.jwt;
    const payload = verifyToken(token);
    const userId = payload.userId;

    const user = await getUserById(parseInt(userId));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    if (
      error instanceof jwt.JsonWebTokenError ||
      error instanceof jwt.TokenExpiredError
    ) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    return res.status(500).json({ message: "Internal server error" });
  }
}

export const logOutController = (_req: Request, res: Response) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json("deslogueado");
  } catch (error) {
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: `Internal Error: ${error.message}` });
    }
    return res.status(500).json({ error: error });
  }
};
