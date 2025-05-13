export interface TaskChecked {
  value: boolean;
  name: string;
  _id: string;
}

export enum StateValue {
  todo = "to do",
  inprogress = "in progress",
  done = "done",
}

export interface TasksInterface {
  _id: string;
  title: string;
  description: string;
  expires: Date;
  taskList: TaskChecked[];
  stateValue: StateValue;
  boardId: string;
}
export interface BoardInterface {
  _id: string;
  nameBoard: string;
  user: string;
  tasks: TasksInterface[];
}

export interface PayloadInterface {
  id: string;
  newStateValue: string;
}

export interface BoardsName {
  _id: string;
  nameBoard: string;
}
