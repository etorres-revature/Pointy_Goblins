import React from "react";
import STRCarousel from "../components/carousel/STRCarousel";
import STRCardList from "../components/card/STRCardList";

const Landing = (props) => {
  return (
    <div>
      <STRCarousel />
      <STRCardList city={props.buttons} />
    </div>
  );
};

export default Landing;
