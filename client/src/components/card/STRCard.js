import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Card.css";
import API from "../../utils/API";


const STRCard = (props) => {
  const history = useHistory();

  function renderListings (event) {
    API.getRentals(event.target.name).then(results => {
      console.log(results);
      
    });

     history.push("/api/" + event.target.name);
  }

  return (
    <Card border="primary" style={{ width: "18rem" }} className="mt-3 cityCard">
      <Card.Body className="text-center">
        <Button onClick={renderListings} name={props.city.city} variant="success">{props.city.city}</Button>
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
