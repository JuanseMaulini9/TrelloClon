import { useAuthContext } from "../context/authUtils";
import { LoginInterface } from "../types/userInterface";
import axios from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const {setAuthUser} = useAuthContext()

  const navigate = useNavigate()

  const login = async ({username, password}: LoginInterface) =>{
    try{
      const res = await axios.post('/auth/login', {username, password})
      if(res.status === 200){
        const data = res.data.username
        setAuthUser(data)
        navigate('/board')
      }
    }catch(error){
      console.log(error)
    }
  }
  return {login}
}

export default useLogin
