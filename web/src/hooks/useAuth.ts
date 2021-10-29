import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export function useAuth() {
  const authentication = useContext(AuthContext);

  return authentication;
}