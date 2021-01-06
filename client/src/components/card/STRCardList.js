import React from "react";
import STRCard from "./STRCard";
import "./CardList.css";

// for landing page search options
const CardList = (props) => {
  console.log("CARDLIST");
  console.log(props);

  return (
    <div className="cardList">
      {props.cities.map((city) => {
        return <STRCard key={city.id} city={city} />;
      })}
    </div>
  );
};

export default CardList;
