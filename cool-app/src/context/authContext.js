import { createContext } from "react";

const defaultAuthContext = {
  isLogin: false,
  isFirstTime: false,
  user: {},
  setLogin: () => {},
  setFirstTime: () => {},
  setUser: () => {},
};

const AuthContext = createContext(defaultAuthContext);

export default AuthContext;
