import jwt from "jsonwebtoken";
import User from "../schemas/user.schema";
import { TokenPayload } from "../types";
import { Request, Response, NextFunction } from "express";

const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.jwt;

    if (!token) {
      return res.status(401).send("No token provided");
    }

    if (typeof process.env.JWT_SECRET !== "string") {
      return res.status(500).send("Internal error: JWT_SECRET not defined");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as TokenPayload;
    if (!decoded) {
      return res.status(401).send("Token verification failed");
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).send("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);
    return res.status(500).send("Internal server error");
  }
};

export default protectRoute;
