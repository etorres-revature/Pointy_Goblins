import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import STRNavbar from "./components/layout/STRNavbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <STRNavbar />
      <Container className="p-0" fluid={true}>
        <Switch>
          <Route exact path="/" render={() => <Signup />} />
          <Route exact path="/signin" render={() => <Signin />} />
          <Route exact path="/landing" render={() => <Landing />} />
          <Route exact path="/search" render={() => <Search />} />
          <Route exact path="/team" render={() => <Team />} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
