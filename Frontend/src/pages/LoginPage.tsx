import AuthLayout from "../layout/AuthLayout";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Log in to your account"
      description="Enter your credentials to login"
    >
      <LoginForm/>
    </AuthLayout>
  );
};

export default LoginPage;
