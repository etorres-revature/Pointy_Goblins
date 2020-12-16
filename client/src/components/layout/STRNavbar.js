import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const MyNavBar = () => {
  return (
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
          <Link className="nav-link" to="/landing">
            Home
          </Link>
          <Link className="nav-link" to="/search">
            Search
          </Link>
          <Link className="nav-link" to="/team">
            Team
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavBar;
