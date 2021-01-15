

function Listing(props) {



  return (

    <div className="mainWapper">
      <h1>{props.listing.title}</h1>
      {/* <div className="card" style="width: 18rem;"> */}
      <img src={props.listing.image} className="card-img-top listingPicture" alt={props.listing.title} />
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text">{props.listing.description}</p>
        <p>{props.listing.location} </p>
      </div>
      <div className="card-body">
        <a href={props.listing.link} target="_blank" rel="noreferrer" className="card-link">Click here to see the listing</a>
      </div>
    </div>

    // </div>
  )
}

export default Listing;