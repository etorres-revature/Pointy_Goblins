import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./NoMatch.css";

import lost from "../assets/img/nomatch.jpg";

const NoMatch = () => {
  return (
    <Container className="text-center">
      <h1>You aren't going anywhere with that attitude...</h1>
      <br />
      <h2>404 - PAGE NOT FOUND</h2>
      <br />
      <img src={lost} alt="stranded on a desert island" />
      <br />
      <br />
      <p>
        You are oh so{" "}
        <span role="img" aria-label="frigid">
          ⛄
        </span>{" "}
        right now. Let's get you{" "}
        <span role="img" aria-label="enFuego">
          🔥
        </span>
      </p>
      <Link to="/signin">
        <Button variant="primary">Back to Sign-in</Button>
      </Link>
    </Container>
  );
};

export default NoMatch;
