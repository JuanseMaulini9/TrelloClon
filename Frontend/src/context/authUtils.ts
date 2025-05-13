import { useContext } from "react";
import { AuthUserContext } from "./authContext";

export const useAuthContext = () => {
  return useContext(AuthUserContext);
};
