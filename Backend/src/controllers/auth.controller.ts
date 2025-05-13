import { Request, Response } from "express";
import { signUp, logIn } from "../services/auth.services";

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
    const token = await logIn(username, password);
    res
      .cookie("jwt", token, {
        maxAge: 2 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ message: `${username} logged` });
  } catch (error) {
    res.status(500).json({ error: error });
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
