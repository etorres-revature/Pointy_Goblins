import React, { Component } from "react";
import STRCarousel from "../components/carousel/STRCarousel";
import STRCardList from "../components/card/STRCardList";

import austin from "../assets/img/austin.jpg";
import denver from "../assets/img/denver.jpg";
import houston from "../assets/img/houston.jpg";
import boston from "../assets/img/boston.jpg";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      buttons: [
        { id: 0, img: austin, city: "AUSTIN" },
        { id: 1, img: denver, city: "DENVER" },
        { id: 2, img: houston, city: "HOUSTON" },
        { id: 3, img: boston, city: "BOSTON" },
      ],
    };
  }

  render() {
    return (
      <div>
        <STRCarousel />
        <h2 className="d-flex justify-content-center my-2 font-weight-bold">
          Choose a city to search for available rentals!
        </h2>
        <STRCardList cities={this.state.buttons} />
      </div>
    );
  }
}

export default Landing;
