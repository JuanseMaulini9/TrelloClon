import { Link } from "react-router-dom";
import SignUpForm from "../components/Auth/SignUpForm";


const SignUpPage = () => {  
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-secondary-gray">
      <div className="bg-main-gray rounded flex flex-col justify-between items-center text-center w-1/2">
        <h2 className="font-bold text-3xl mt-4 py-2">Sign In</h2>
        <SignUpForm></SignUpForm>
        <p className="mb-4 text-gray-400">
          Already have an account? <span className="text-blue-400 hover:underline cursor-pointer"><Link to='/login'>LogIn</Link></span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
