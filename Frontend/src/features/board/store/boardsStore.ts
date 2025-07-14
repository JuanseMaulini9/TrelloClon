import { create } from "zustand";

import type {
  BoardStateInterface,
  BoardsActionInterface,
} from "../../../types";

export const useBoardStore = create<
  BoardStateInterface & BoardsActionInterface
>((set, get) => ({
  boards: [],
  createBoardModal: false,
  addCardModal: false,
  currentBoard: null,

  setBoards: (newBoards) => set({ boards: newBoards }),
  setNewBoard: (newBoard) => set({ boards: [...get().boards, newBoard] }),

  openCreateModal: () => set({ createBoardModal: true }),
  closeCreateModal: () => set({ createBoardModal: false }),

  openCardModal: () => set({ addCardModal: true }),
  closeCardModal: () => set({ addCardModal: false }),

  setCurrentBoard: (newCurrentBoard) => set({ currentBoard: newCurrentBoard }),
}));
