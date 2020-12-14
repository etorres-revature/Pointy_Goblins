import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import STRNavbar from "./components/layout/STRNavbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Team from "./pages/Team";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttons: [
        { id: 0, img: "./assets/img/austin.jpg", city: "AUSTIN" },
        { id: 1, img: "./assets/img/denver.jpg", city: "DENVER" },
        { id: 2, img: "./assets/img/houston.jpg", city: "HOUSTON" },
        { id: 3, img: "./assets/img/boston.jpg", city: "BOSTON" },
      ],
    };
  }

  render() {
    return (
      <Router>
        <STRNavbar />
        <Container className="p-0" fluid={"true"}>
          <Switch>
            <Route exact path="/" render={() => <Signup />} />
            <Route exact path="/signin" render={() => <Signin />} />
            <Route exact path="/landing" render={() => <Landing city={this.state.buttons}/>} />
            <Route exact path="/search" render={() => <Search />} />
            <Route exact path="/team" render={() => <Team />} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
