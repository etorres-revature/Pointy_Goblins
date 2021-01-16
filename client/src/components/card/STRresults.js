import React from "react";
import { CardColumns, Row } from "react-bootstrap";
import SearchResultCard from "../card/SearchResultCard";

export default function STRresults(props) {
  return (
    <div>
      {props.list.data === undefined ? (
        <Row>
          <h1 className='mx-auto'>
            Loading Results... <i class='fas fa-spinner fa-spin'></i>
          </h1>
        </Row>
      ) : (
        <CardColumns className='m-3'>
          {props.list.data.map((item) => {
            return <SearchResultCard listingDetails={item}></SearchResultCard>;
          })}
        </CardColumns>
      )}
    </div>
  );
}
