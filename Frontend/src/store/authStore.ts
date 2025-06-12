import { create } from "zustand";

import type { AuthStateInterface, AuthActionsInterface } from "../types";

export const useAuthStore = create<AuthStateInterface & AuthActionsInterface>(
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
