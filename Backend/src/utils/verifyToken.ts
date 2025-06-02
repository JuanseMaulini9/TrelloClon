import jwt from "jsonwebtoken";
import { TokenPayload } from "../types";

export function verifyToken(token: string): TokenPayload {
  if (!token) throw new Error("No token provided");

  const secret = process.env.JWT_SECRET;
  if (typeof secret !== "string") throw new Error("JWT_SECRET is not defined");

  const decoded = jwt.verify(token, secret) as TokenPayload;
  return decoded;
}
