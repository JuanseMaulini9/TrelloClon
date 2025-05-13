import { Types } from "mongoose";

export interface UserInterface {
  _id: Types.ObjectId;
  username: string;
  password: string;
  boards: [Types.ObjectId];
}

export interface BoardInterface {
  _id: Types.ObjectId;
  nameBoard: string;
  user: Types.ObjectId;
  tasks: [Types.ObjectId];
}

export enum StateValue {
  todo = "to do",
  inprogress = "in progress",
  done = "done",
}

export interface TaskChecked {
  _id: Types.ObjectId;
  value: boolean;
  name: string;
}

export interface TasksInterface {
  _id: Types.ObjectId;
  title: string;
  description: string;
  expires: Date;
  taskList: TaskChecked[];
  stateValue: StateValue;
  boardId: Types.ObjectId;
}

export interface TokenPayload {
  userId: string;
}
