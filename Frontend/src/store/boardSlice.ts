import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardInterface } from "../types/storeInterface";
import { TasksInterface } from "../types/storeInterface";

export interface BoardsStateInterface {
  currentBoard: BoardInterface | null;
}

const initialState: BoardsStateInterface = {
  currentBoard: null,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action: PayloadAction<BoardInterface>) => {
      state.currentBoard = action.payload;
    },
    setMoveTask: (state, action: PayloadAction<TasksInterface[]>) => {
      const tasks = action.payload;
      if (state.currentBoard) {
        state.currentBoard.tasks = tasks;
      }
    },
    createTask: (state, action: PayloadAction<TasksInterface>) => {
      state.currentBoard?.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<TasksInterface>) => {
      const taskId = action.payload._id;
      if (state.currentBoard) {
        const index = state.currentBoard.tasks.findIndex(
          (task) => task._id === taskId
        );
        if (index !== -1) {
          state.currentBoard.tasks[index] = action.payload;
        }
      }
    },
  },
});

export const { setBoard, setMoveTask, createTask, editTask } =
  boardSlice.actions;
