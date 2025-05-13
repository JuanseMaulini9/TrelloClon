import { TasksInterface, TaskChecked, StateValue } from "../types";
import mongoose, { Types } from "mongoose";

const TaskCheckedSchema = new mongoose.Schema<TaskChecked>({
  value: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const TasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  expires: {
    type: Date,
    default: new Date(),
  },
  taskList: {
    type: [TaskCheckedSchema],
  },
  stateValue: {
    type: String,
    enum: Object.values(StateValue),
    default: "To do",
  },
  boardId: {
    type: Types.ObjectId,
    required: true,
    ref: "Board",
  },
});

const Tasks = mongoose.model<TasksInterface>("Tasks", TasksSchema);
export default Tasks;
