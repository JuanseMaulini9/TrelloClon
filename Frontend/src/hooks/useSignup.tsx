import { useAuthContext } from "../context/authUtils";
import { SignupInterface } from "../types/userInterface";
import axios from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const { setAuthUser } = useAuthContext();

  const navigate = useNavigate()

  const signup = async ({
    username,
    password,
    confirmPass,
  }: SignupInterface) => {
    try {
      const res = await axios.post("/auth/signup", {
        username,
        password,
        confirmPass,
      });

      if (res.status === 201) {
        const data = res.data.username;
        setAuthUser(data);
        navigate('/board')
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { signup };
};

export default useSignup;
