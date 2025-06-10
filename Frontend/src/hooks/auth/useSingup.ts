import { useState } from "react";
import { useAuthStore } from "../../store/authStore";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setUser } = useAuthStore();

  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const signup = async (username: string, password: string) => {
    setLoading(true);

    try {
      const response = await fetch(`${backend_url}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Signup Error");
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

  return { loading, error, signup };
};
