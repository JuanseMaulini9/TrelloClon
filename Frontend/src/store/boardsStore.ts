import { create } from "zustand";

import type { BoardStateInterface, BoardsActionInterface } from "../types";

export const useBoardStore = create<
  BoardStateInterface & BoardsActionInterface
>((set, get) => ({
  boards: [],
  createBoardModal: false,

  setBoards: (newBoards) => set({ boards: newBoards }),
  setNewBoard: (newBoard) => set({ boards: [...get().boards, newBoard] }),

  openModal: () => set({ createBoardModal: true }),
  closeModal: () => set({ createBoardModal: false }),
}));
