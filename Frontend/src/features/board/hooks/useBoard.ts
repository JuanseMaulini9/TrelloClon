import { useState, useCallback } from "react";
import { useBoardStore } from "../store/boardsStore";

export const useBoard = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setBoards, setNewBoard } = useBoardStore();

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

  const createBoard = async (boardName: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BACKEND_URL}/api/board`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ boardName }),
      });
      if (!response.ok) throw new Error("Error al crear el board");
      const res = await response.json();
      setNewBoard(res.newBoard);
    } catch (error) {
      console.log(error);
    }
  };

  return { getBoards, createBoard, loading, error };
};
