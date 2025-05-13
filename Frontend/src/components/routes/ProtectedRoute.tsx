import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../context/authUtils" 

const Protectedroute = () =>{

  const {authUser} = useAuthContext()

  if(authUser.username === ''){
    return(< Navigate to='/login'/>)
  }

  return (
    <Outlet/>
  )
}

export default Protectedroute