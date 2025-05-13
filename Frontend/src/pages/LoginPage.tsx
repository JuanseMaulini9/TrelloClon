import { Link } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-secondary-gray">
      <div className="bg-main-gray rounded flex flex-col justify-between items-center text-center w-1/2">
        <h2 className="font-bold text-3xl mt-4 py-2 text-text-main">Login</h2>
        <LoginForm></LoginForm>
        <p className="mb-4 text-gray-400">
          Not have an account? <span className="text-blue-400 hover:underline cursor-pointer"><Link to='/signup'>Sign Up</Link></span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
