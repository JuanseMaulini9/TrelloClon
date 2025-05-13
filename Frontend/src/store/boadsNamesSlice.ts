import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardsName } from "../types/storeInterface";

export interface BoardsNameState {
  boardsNames: BoardsName[];
}

const initialState: BoardsNameState = {
  boardsNames: [],
};

export const boardsNamesSlice = createSlice({
  name: "boardsNames",
  initialState,
  reducers: {
    setBoardsNames: (state, action: PayloadAction<BoardsName[]>) => {
      state.boardsNames = action.payload;
    },
    createBoard: (state, action: PayloadAction<BoardsName>) => {
      state.boardsNames.push(action.payload);
    },
    editBoardName: (state, action: PayloadAction<BoardsName>) => {
      const { _id } = action.payload;
      state.boardsNames = state.boardsNames.map((item) =>
        item._id === _id ? action.payload : item
      );
    },
    deleteBoardName: (state, action: PayloadAction<string>) => {
      state.boardsNames = state.boardsNames.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const { setBoardsNames, createBoard, editBoardName, deleteBoardName } =
  boardsNamesSlice.actions;
