import express from "express";
import {
  signUpController,
  logInController,
  logOutController,
} from "../controllers/auth.controller";
const router = express.Router();

router.post("/signup", signUpController);
router.post("/login", logInController);
router.post("/logout", logOutController);

export default router;
