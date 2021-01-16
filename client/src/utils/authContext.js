import { useContext, useState, createContext } from "react";
import API from "./API";

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const checkUserState = () => {
    const currentUser = localStorage.getItem("user");

    if (currentUser != null) {
      setUser(JSON.parse(currentUser));
    }
  };

  const signin = (email, password, cb) => {
    return API.findUser({ email, password }).then((res) => {
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      cb();
    });
  };

  const signout = (cb) => {
    return API.signOut().then((res) => {
      localStorage.removeItem("user");

      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
    checkUserState,
  };
}

export { ProvideAuth, useAuth, useProvideAuth };
