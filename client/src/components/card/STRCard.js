import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import "./Card.css";
import Search from "../../pages/Search";
import API from "../../utils/API";
import ListingContext from "../../utils/ListingContext";
import Redirect from "react";

// for landing page search options

const STRCard = (props) => {
  const history = useHistory();

  const { city, listings, setListings, setCity } = useContext(ListingContext);

  const updateCity = () => {
    setCity(props.city.city);
    history.push("/Search");
  };

  return (
    // <ListingContext.Consumer>
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
    // </ListingContext.Consumer>
  );
};

export default STRCard;
