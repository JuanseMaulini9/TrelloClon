import { useState, useCallback } from "react";
import type { Task } from "../../types";

export const useTask = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = useCallback(
    async (boardId: number) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/task/getTask/${boardId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        if (!response.ok) throw new Error("Error al traer las tasks");
        const res = await response.json();
        setTasks(res.tasks);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Error desconocido");
        }
      } finally {
        setLoading(false);
      }
    },
    [BACKEND_URL]
  );

  const updateTask = async (taskId: number, updates: Partial<Task>) => {
    const prevTasks = tasks;

    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === taskId ? { ...task, ...updates } : task
      )
    );

    try {
      const response = await fetch(`${BACKEND_URL}/api/task/updateStateTask`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ taskId: taskId, state: updates.state }),
        credentials: "include",
      });
      if (!response.ok) throw new Error("Error al actualizar el estado");
    } catch (error) {
      setTasks(prevTasks);
      console.error("Error updating task:", error);
    }
  };

  return { tasks, getTasks, updateTask, loading, error };
};
