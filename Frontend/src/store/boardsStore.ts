import { create } from "zustand";

export const useBoardStore = create((set) => ({
  boards: [],
  setBoards: (newBoards) => set({ boards: newBoards }),
}));
