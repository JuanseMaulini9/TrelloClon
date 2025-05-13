import { useAuthContext } from "../context/authUtils"
import { useNavigate } from "react-router-dom"
import axios from "../services/axiosInstance"

const useLogout = () => {
  const {setAuthUser} = useAuthContext()

  const navigate = useNavigate()
  const logout = async() => {
    
    try{
      const res = await axios.post('/auth/logout')
      if(res.status === 200){
        setAuthUser('')
        navigate('/')
      }
    }catch(error){
      console.log(error)
    }
  }
  return {logout}
}

export default useLogout