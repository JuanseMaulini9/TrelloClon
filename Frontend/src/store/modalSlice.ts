import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const viewModalSlice = createSlice({
  name: "viewModal",
  initialState,
  reducers: {
    viewModal: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "MODAL_ON":
          return true;
        case "MODAL_OFF":
          return false;
        default:
          return state;
      }
    },
  },
});

export const { viewModal } = viewModalSlice.actions;
