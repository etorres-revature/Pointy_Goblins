import React from "react";
import { Card, Button } from "react-bootstrap";

const STRCard = (props) => {
  return (
    <div>
      <img alt={props.city + " skyline"} src={props.img} />
      <Button>{}props.city</Button>
    </div>
  );
};

export default STRCard;
