import SignupForm from "../components/SignupForm";
import AuthLayout from "../layout/AuthLayout";

import { useSignup } from "../hooks/auth/useSingup";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignupPage = () => {
  
  const {data, error, loading, signup} = useSignup()
  const {setUser} = useAuthStore()
  const navigate = useNavigate()
  
  useEffect(() => {
      if (data) {
        setUser(data);
        navigate("/dashboard");
      }
    }, [data, setUser, navigate]);

  return (
    <AuthLayout
      title="Create an account"
      description="Enter your email below to create your account"
    >
      <SignupForm onSubmit={signup} error={error} loading={loading}/>
    </AuthLayout>
  );
};

export default SignupPage;
