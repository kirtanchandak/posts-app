import { createContext, useContext, useEffect, useState } from "react";
import {
  init,
  logIn as authLogIn,
  logOut as authLogOut,
  auth,
} from "../lib/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    init((user) => {
      setUser(user);
    });

    auth.on("login", setUser);
    return () => {
      auth.off("login", setUser);
    };
  }, []);

  const logIn = () => {
    authLogIn((user) => {
      setUser(user);
    });
  };

  const logOut = () => {
    authLogOut(() => {
      setUser(undefined);
    });
  };

  const contextValue = {
    user,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
