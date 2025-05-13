import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CurrentModalCardState {
  currentModalCard: string;
}

const initialState: CurrentModalCardState = {
  currentModalCard: "",
};

export const currentModalCardSlice = createSlice({
  name: "currentModalCard",
  initialState,
  reducers: {
    setCurrentModalCard: (state, action: PayloadAction<string>) => {
      action.payload ? (state.currentModalCard = action.payload) : "";
    },
  },
});

export const { setCurrentModalCard } = currentModalCardSlice.actions;
