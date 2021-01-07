import { React, useState, useContext, useEffect } from "react";
import API from "../utils/API";
import { Card, Button, CardDeck } from "react-bootstrap";

const Search = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    API.getFavorites().then((results) => {
      setListings(results.data);
    });
  }, []);

  console.log("this is the state listing", listings);

  return (
      listings.map(listing => 
        <div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={listing.image} />
                <Card.Body>
                <Card.Title>
                    <strong> {listing.title}</strong>
                </Card.Title>
                <hr></hr>
                <Card.Text>{listing.description}</Card.Text>
                <h4>
                ${listing.price} /<small> night</small>
                </h4>
                <Button variant="primary" target="_blank" href={listing.link}>
                See listing on {listing.source}
                </Button>
                <Button variant="secondary m-2">Add to Favorites</Button>
            </Card.Body>
        </Card>
        </CardDeck>
        </div>
      )
  );
};

export default Search;
