import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { createUser, getUserByUsername } from "../models/user.model";

dotenv.config();

export async function signUp(username: string, password: string) {
  const userExist = await getUserByUsername(username);
  if (userExist) {
    throw new Error("El usuario ya existe");
  }

  const hashedPassword = await bcrypt.hash(password, 9);
  await createUser(username, hashedPassword);
}

export async function logIn(username: string, password: string) {
  const user = await getUserByUsername(username);

  if (!user) {
    throw new Error("No se encontro el usuario");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new Error("Contraseña invalida");
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET ? process.env.JWT_SECRET : "secreto",
    { expiresIn: "1h" }
  );
  return { user, token };
}
