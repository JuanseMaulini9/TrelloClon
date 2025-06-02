import jwt from "jsonwebtoken";
import { TokenPayload } from "../types";
import { Request, Response, NextFunction } from "express";
import { getUserById } from "../models/user.model";

import { verifyToken } from "../utils/verifyToken";

const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.jwt;

    const payload = verifyToken(token);

    const user = await getUserById(parseInt(payload.userId));

    req.user = user;
    next();
  } catch (error) {
    if (
      error instanceof jwt.JsonWebTokenError ||
      error instanceof jwt.TokenExpiredError
    ) {
      return res.status(401).json({ message: "Invalid token or expired" });
    }
    console.error("Error in protectRoute middleware:", error);
    return res.status(500).send("Internal server error");
  }
};

export default protectRoute;
