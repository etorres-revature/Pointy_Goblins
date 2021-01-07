import React from "react";
import { Card, Button } from "react-bootstrap";

export default function SearchResultCard({ listingDetails }) {
  console.log("I'm in a search result card!");
  {
    console.log(listingDetails);
  }

  return (
    <Card>
      <Card.Img variant="top" src={listingDetails.image} />
      <Card.Body>
        <Card.Title>
          <strong> {listingDetails.title}</strong>
        </Card.Title>
        <hr></hr>
        <Card.Text>{listingDetails.description}</Card.Text>
        <h4>
          ${listingDetails.price} /<small> night</small>
        </h4>
        <Button variant="primary" target="_blank" href={listingDetails.link}>
          See listing on {listingDetails.source}
        </Button>
        <Button variant="secondary m-2">Add to Favorites</Button>
      </Card.Body>
    </Card>
  );
}
