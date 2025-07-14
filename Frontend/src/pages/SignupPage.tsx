import SignupForm from "../features/auth/components/SignupForm";
import AuthLayout from "../layout/AuthLayout";

import { useSignup } from "../features/auth/hooks/useSingup";
import { useAuthStore } from "../features/auth/store/authStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignupPage = () => {
  const { error, loading, signup } = useSignup();
  const navigate = useNavigate();

  const { isAuthenticate } = useAuthStore();

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/dashboard");
    }
  }, [isAuthenticate, navigate]);

  return (
    <AuthLayout
      title="Create an account"
      description="Enter your email below to create your account"
    >
      <SignupForm onSubmit={signup} error={error} loading={loading} />
    </AuthLayout>
  );
};

export default SignupPage;
