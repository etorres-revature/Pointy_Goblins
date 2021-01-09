import { React, useState, useContext, useEffect } from "react";
import API from "../utils/API";
import { Card, Button, CardDeck } from "react-bootstrap";

const Search = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getFavs();
  }, []);

  function getFavs() {
    API.getFavorites().then((results) => {
      setListings(results.data);
    });
  }

  function deleteListing(event) {
    const id = event.target.value;

    API.deleteFavListing(id).then((result) => {
      console.log(result);
      getFavs();
    });
  }

  return (
    <CardDeck>
      {listings.map((listing) => (
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
            <Button
              onClick={deleteListing}
              value={listing._id}
              className="btn btn-danger"
              variant="secondary m-2"
            >
              Remove from Favorites
            </Button>
          </Card.Body>
        </Card>
      ))}
    </CardDeck>
  );
};

export default Search;
