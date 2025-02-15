import { createContext, useContext } from "react";
import { IAuth } from "../../shared/types/IAuth";

const defaultState = {
  isAuth: false,
  isLoading: false,
  user: {
    id: '',
    username: '',
    email: '',
    password: '',
  },
  error: null,
  authUser: () => {},
  logout: () => {},
};

export const AuthContext = createContext<IAuth>(defaultState);

export const useAuth = () => useContext(AuthContext);
