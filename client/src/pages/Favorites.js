import { React, useState, useContext, useEffect } from "react";
import API from "../utils/API";
import { Card, Button, CardColumns } from "react-bootstrap";

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
    <div className="container">
      <br></br>
      <h2 className="mx-auto font-italic font-weight-bold"> Favorites</h2>
      <hr></hr>

      <CardColumns>
        {listings.map((listing) => (
          <Card>
            <Card.Img variant="top" src={listing.image} />
            <Card.Body>
              <Card.Title>
                <strong> {listing.title}</strong>
              </Card.Title>
              <hr></hr>
              <Card.Text>{listing.description}</Card.Text>

              <h4 className="d-flex justify-content-end">
                ${listing.price} /<small> night</small>
              </h4>
              <hr></hr>
              <Button className="mx-auto  d-flex justify-content-center" variant="primary btn  " target="_blank" href={listing.link}>
                See listing on {listing.source}
              </Button>
              <Button
                onClick={deleteListing}
                value={listing._id}
                className="btn btn-danger d-flex justify-content-center  mx-auto mt-2"
                variant="secondary"
              >
                Remove from Favorites
            </Button>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </div>
  );
};

export default Search;
