import { create } from "zustand";

import type { BoardStateInterface, BoardsActionInterface } from "../types";

export const useBoardStore = create<
  BoardStateInterface & BoardsActionInterface
>((set) => ({
  boards: [],

  setBoards: (newBoards) => set({ boards: newBoards }),
}));
