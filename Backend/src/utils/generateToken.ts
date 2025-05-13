import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (userId: string, res: Response) => {
  if (typeof process.env.JWT_SECRET === "string") {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    res.cookie("jwt", token, {
      maxAge: 2 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });
  }
};

export default generateToken;
