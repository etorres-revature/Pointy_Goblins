import { React, useContext, useEffect } from "react";
import ListingContext from "../utils/ListingContext";
import API from "../utils/API";
import STRresults from "../components/card/STRresults";

const Search = () => {
  const { city, listings, setListings } = useContext(ListingContext);
  console.log("🚀 ~ file: Search.js ~ line 6 ~ Search ~ city", city);

  let searchedCity = city;
  const casedSearchedCity =
    searchedCity.charAt(0).toUpperCase() + searchedCity.slice(1).toLowerCase();

  useEffect(() => {
    setListings([]);
    API.getRentals(city).then((results) => {
      console.log(results);
      setListings(results);
      console.log(
        "🚀 ~ file: Search.js ~ line 6 ~ Search ~ listings",
        listings
      );
    });
  }, []);

  return (
    <div>
      <h2 className="m-3 font-italic"> Rentals in {casedSearchedCity}</h2>
      <hr></hr>

      <STRresults list={listings} />
    </div>
  );
};

export default Search;
