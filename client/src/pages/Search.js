import { React, useContext, useEffect } from "react";
import ListingContext from "../utils/ListingContext";
import API from "../utils/API";
import STRresults from '../components/card/STRresults'

const Search = () => {
  const { city, listings, setListings } = useContext(ListingContext);
  console.log("🚀 ~ file: Search.js ~ line 6 ~ Search ~ city", city);

  useEffect(() => {
    API.getRentals(city).then((results) => {
      console.log(results);
      setListings(results);
      console.log("🚀 ~ file: Search.js ~ line 6 ~ Search ~ listings", listings);
    });
  },[]);

  return (
    <div>
      <p></p>Search Page
      <STRresults list={listings}/>
    </div>
  );
};

export default Search;
