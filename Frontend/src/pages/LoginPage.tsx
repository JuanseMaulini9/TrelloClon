import AuthLayout from "../layout/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import { useLogin } from "../hooks/auth/useLogin";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { error, loading, login } = useLogin();
  const {isAuthenticate} = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if(isAuthenticate){
      navigate("/dashboard", { replace: true })
    }
  }, [isAuthenticate, navigate])

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
