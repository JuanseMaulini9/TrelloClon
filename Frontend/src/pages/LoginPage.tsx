import AuthLayout from "../layout/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useLogin } from "../hooks/auth/useLogin";

const LoginPage = () => {
  const navigate = useNavigate();
  const { data, error, loading, login } = useLogin();
  const { setUser } = useAuthStore();

  useEffect(() => {
    if (data) {
      setUser(data);
      navigate("/dashboard");
    }
  }, [data, setUser, navigate]);

  return (
    <AuthLayout
      title="Log in to your account"
      description="Enter your credentials to login"
    >
      <LoginForm onSubmit={login} loading={loading} error={error} />
    </AuthLayout>
  );
};

export default LoginPage;
