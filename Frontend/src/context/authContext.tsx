import { createContext, useState } from "react";
interface AuthProviderProps {
  children: React.ReactNode
}

export interface AuthInterface {
  authUser: string 
  setAuthUser: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthUserContext = createContext<AuthInterface>({
  authUser: '',
  setAuthUser: () => null,
})


export const AuthUserProvider = ({children}: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<string>('')


  return (
    <AuthUserContext.Provider value={{authUser, setAuthUser}}>
      {children}
    </AuthUserContext.Provider>
  )

}