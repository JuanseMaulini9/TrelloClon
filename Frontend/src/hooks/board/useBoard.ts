import { useState, useCallback } from "react";
import { useBoardStore } from "../../store/boardsStore";

export const useBoard = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setBoards } = useBoardStore();

  const getBoards = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BACKEND_URL}/api/board`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) throw new Error("Error al traer los boards");
      const res = await response.json();
      setBoards(res.boards);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Error desconocido");
      }
    } finally {
      setLoading(false);
    }
  }, [BACKEND_URL, setBoards]);

  return { getBoards, loading, error };
};
