import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import STRNavbar from "./components/layout/STRNavbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Team from "./pages/Team";
import Favorites from "./pages/Favorites";
import NoMatch from "./pages/NoMatch";
import "./App.css";
import { ProvideAuth, useAuth } from "./utils/authContext";
import ListingContext from "./utils/ListingContext";
import Logout from "./components/Logout/Logout";
import LoggedOutPage from "./pages/LoggedOutPage";

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/signin", state: { from: location } }} />
        )
      }
    />
  );
}

function App() {
  const [city, setCity] = useState("");
  const [listings, setListings] = useState([]);

  return (
    <ProvideAuth>
      <ListingContext.Provider value={{ city, listings, setCity, setListings }}>
        <Router>
          <STRNavbar />
          <Container className="p-0" fluid={"true"}>
            <Switch>
              <Route exact path="/signin" render={() => <Signin />} />
              <Route exact path="/" render={() => <Signup />} />
              <Route
                exact
                path="/loggedoutpage"
                render={() => <LoggedOutPage />}
              />
              <PrivateRoute exact path="/landing">
                <Landing />
              </PrivateRoute>
              <PrivateRoute exact path="/api/:city">
                <h1>Hi there</h1>
              </PrivateRoute>
              <PrivateRoute exact path="/search">
                <Search />
              </PrivateRoute>
              <PrivateRoute exact path="/favorites">
                <Favorites />
              </PrivateRoute>
              <PrivateRoute exact path="/team">
                <Team />
              </PrivateRoute>
              <PrivateRoute exact path="/logout">
                <Logout />
              </PrivateRoute>

              <Route
                path="*"
                render={() => {
                  return <NoMatch />;
                }}
              />
            </Switch>
          </Container>
        </Router>
      </ListingContext.Provider>
    </ProvideAuth>
  );
}

export default App;
