import express from "express";
import {
  signUpController,
  logInController,
  verifyController,
  logOutController,
} from "../controllers/auth.controller";
const router = express.Router();

router.post("/signup", signUpController);
router.post("/login", logInController);
router.get("/verify", verifyController);
router.post("/logout", logOutController);

export default router;
