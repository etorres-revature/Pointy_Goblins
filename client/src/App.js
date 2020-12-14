import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import STRNavbar from "./components/layout/STRNavbar";

function App() {
  return (
    <Router>
      <STRNavbar />
      <Container className="p-0" fluid={true}></Container>
    </Router>
  );
}

export default App;
