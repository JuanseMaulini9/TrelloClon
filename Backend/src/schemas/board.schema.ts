import { BoardInterface } from "../types";
import mongoose, { Types } from "mongoose";

const boardSchema = new mongoose.Schema({
  nameBoard: {
    type: String,
    required: true,
  },
  user: {
    type: Types.ObjectId,
    required: true,
    ref: "User",
  },
  tasks: [
    {
      type: Types.ObjectId,
      ref: "Tasks",
    },
  ],
});

const Board = mongoose.model<BoardInterface>("Board", boardSchema);
export default Board;
