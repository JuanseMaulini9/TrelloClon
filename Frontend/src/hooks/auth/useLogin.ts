import { useState } from "react";

import { useAuthStore } from "../../store/authStore";

export const useLogin = () => {
  const { setUser } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const login = async (username: string, password: string) => {
    setLoading(true);

    try {
      const response = await fetch(`${backend_url}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login Error");
      }
      setUser(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || "Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, login };
};
