import { useContext, useState, createContext } from "react";
import API from "./API";

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password, cb) => {
    return API.findUser({email, password}).then(res => {
        setUser(res.data);

        cb();
      });
  };

//   const signout = cb => {
//     return fakeAuth.signout(() => {
//       setUser(null);
//       cb();
//     });
//   };

  return {
    user,
    signin,
    // signout
  };
}

export {
    ProvideAuth,
    useAuth,
    useProvideAuth
}