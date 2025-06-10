import { useState } from "react";

export const useBoard = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getBoards = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BACKEND_URL}/api/board`);
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
  };

  return { boards, getBoards, loading, error };
};
