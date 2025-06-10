import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

import { useAuthStore } from "../store/authStore"

interface Props {
  children: ReactNode
}

const ProtectedRoute = ({children} : Props) => {

  const {isAuthenticate} = useAuthStore()

  if(!isAuthenticate) return <Navigate to={"/login"} replace/>

  return children
}

export default ProtectedRoute