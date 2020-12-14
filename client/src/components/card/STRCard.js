import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Card.css";

const STRCard = (props) => {
  return (
    <Card border="primary" style={{ width: "18rem" }} className="mt-3 card">
      <Card.Body className="text-center">
        <Button variant="success">{props.city.city}</Button>
      </Card.Body>
      <Card.Img
        className="image"
        variant="bottom"
        alt={props.city.city + " skyline"}
        src={props.city.img}
      />
    </Card>
  );
};

export default STRCard;
