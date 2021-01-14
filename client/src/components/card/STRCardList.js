import React from "react";
import STRCard from "./STRCard";
import "./CardList.css";
import { CardGroup } from "react-bootstrap";

// for landing page search options
const CardList = (props) => {
  return (
    <CardGroup>
      <div className='cardList mx-auto'>
        {props.cities.map((city) => {
          return <STRCard key={city.id} city={city} />;
        })}
      </div>
    </CardGroup>
  );
};

export default CardList;
