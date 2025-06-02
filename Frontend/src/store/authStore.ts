import { create } from "zustand";

import { type AuthStateInterface, type ActionsInterface } from "../types";

export const useAuthStore = create<AuthStateInterface & ActionsInterface>(
  (set) => ({
    user: null,
    isAuthenticate: false,
    setUser: (user) =>
      set(() => ({
        user: user,
        isAuthenticate: true,
      })),
    cleanUser: () =>
      set(() => ({
        user: null,
        isAuthenticate: false,
      })),
  })
);
