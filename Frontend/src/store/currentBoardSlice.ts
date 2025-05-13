import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CurrentBoardState {
  currentBoardId: string;
}

const initialState: CurrentBoardState = {
  currentBoardId: "",
};

export const currentBoardSlice = createSlice({
  name: "currentBoard",
  initialState,
  reducers: {
    setCurrentBoard: (state, action: PayloadAction<string>) => {
      state.currentBoardId = action.payload;
    },
  },
});

export const { setCurrentBoard } = currentBoardSlice.actions;
