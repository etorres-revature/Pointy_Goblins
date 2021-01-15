import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Card.css";

import ListingContext from "../../utils/ListingContext";


// for landing page search options

const STRCard = (props) => {
  const history = useHistory();

  const { setCity } = useContext(ListingContext);

  const updateCity = () => {
    setCity(props.city.city);
    history.push("/Search");
  };

  return (

    <Card border="primary" style={{ width: "18rem" }} className="mt-3 cityCard">
      <Card.Body className="text-center">
        <Button name={props.city.city} onClick={updateCity} variant="success">
          {props.city.city}
        </Button>
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
