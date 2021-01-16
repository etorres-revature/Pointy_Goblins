import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import API from "../../utils/API";

export default function SearchResultCard({ listingDetails }) {
  const [clicked, setClicked] = useState(false);

  function addToFavorites() {
    API.saveListing({
      title: listingDetails.title,
      location: listingDetails.location,
      description: listingDetails.description,
      source: listingDetails.source,
      link: listingDetails.link,
      image: listingDetails.image,
      price: listingDetails.price,
    })
      .then(() => {
        setClicked(true);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <Button
          onClick={addToFavorites}
          disabled={clicked}
          variant="secondary m-2"
        >
          Add to Favorites
        </Button>
      </Card.Body>
    </Card>
  );
}
