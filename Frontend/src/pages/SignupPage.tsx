import SignupForm from "../components/SignupForm";
import AuthLayout from "../layout/AuthLayout";

const SignupPage = () => {
  return (
    <AuthLayout
      title="Create an account"
      description="Enter your email below to create your account"
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default SignupPage;
