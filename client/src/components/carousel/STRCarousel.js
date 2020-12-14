import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

import bucolicValley from "./bucolic-valley.jpg";
import citySkyline from "./skyscraper-city-skyline.jpg";
import calmBeach from "./calm-beach.jpg";
import skiLift from "./ski-lift.jpg";
import lighthouse from "./lighthouse.jpg";
import kayak from "./kayak.jpg";

const STRCarousel = () => {
  return (
    <Carousel className="p-0 m-0">
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 slide"
          src={bucolicValley}
          alt="bucolic valley"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 slide"
          src={citySkyline}
          alt="city skyline"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100 slide" src={calmBeach} alt="calm beach" />
        {/*<Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100 slide" src={skiLift} alt="ski lift" />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 slide"
          src={lighthouse}
          alt="city skyline"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100 slide" src={kayak} alt="city skyline" />
      </Carousel.Item>
    </Carousel>
  );
};

export default STRCarousel;
