import { create } from "zustand";

import type { BoardStateInterface, BoardsActionInterface } from "../types";

export const useBoardStore = create<
  BoardStateInterface & BoardsActionInterface
>((set, get) => ({
  boards: [],

  setBoards: (newBoards) => set({ boards: newBoards }),
  setNewBoard: (newBoard) => set({ boards: [...get().boards, newBoard] }),
}));
