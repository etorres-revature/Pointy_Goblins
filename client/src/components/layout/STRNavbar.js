import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { ProvideAuth, useAuth } from "../../utils/authContext";

const MyNavBar = () => {
  const auth = useAuth();

  const authenticatedNavLinks = (
    <ProvideAuth>
      <Navbar className="border-bottom" bg="primary" variant="dark" expand="md">
        <Navbar.Brand>
          <strong>STR Aggregator</strong>
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/landing">
              Home
            </Link>
            <Link className="nav-link" to="/favorites">
              Favorites
            </Link>
            <Link className="nav-link" to="/budget">
              Budget Tracker
            </Link>
            <Link className="nav-link" to="/team">
              Team
            </Link>
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ProvideAuth>
  );

  const notAuthenticatedNavLinks = (
    <ProvideAuth>
      <Navbar className="border-bottom" bg="primary" variant="dark" expand="md">
        <Navbar.Brand>
          <strong>STR Aggregator</strong>
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              Sign-up
            </Link>
            <Link className="nav-link" to="/signin">
              Sign-In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ProvideAuth>
    //  eslint-disable-next-line
  );
  return auth.user ? authenticatedNavLinks : notAuthenticatedNavLinks;
};

export default MyNavBar;
