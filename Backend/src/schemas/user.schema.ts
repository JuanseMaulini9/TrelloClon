import { UserInterface } from "../types";
import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  boards: [
    {
      type: Types.ObjectId,
      ref: "Board",
    },
  ],
});

const User = mongoose.model<UserInterface>("User", userSchema);
export default User;
