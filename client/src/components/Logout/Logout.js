import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/authContext";

const Logout = () => {
  const history = useHistory();
  const [error] = useState(null);

  const auth = useAuth();

  useEffect(() => {
    auth.signout(() => history.replace("/loggedoutpage"));
  }, []);
  if (error) return <div>Unable to logout</div>;

  return <></>;
};

export default Logout;
