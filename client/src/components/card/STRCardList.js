import React from "react";
import STRCard from "./STRCard";

const CardList = (props) => {
  return (
    <div>
      {props.buttons.map((city) => {
        return <STRCard key={city.id} city={city} />;
      })}
    </div>
  );
};

export default CardList;
