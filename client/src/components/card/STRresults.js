import React from 'react'
import { Card, Button } from "react-bootstrap";


export default function STRresults(props) {

  console.log('------THIS IS PROPS--------')
  console.log(props.list.data)
  return (
    <div>
    
      {
        props.list.data === undefined ? <h1>LOADING</h1> : props.list.data.map((item)=>{
        return        <Card border="primary" style={{ width: "18rem" }} className="mt-3 listingCard">
        <Card.Body className="text-center">
        <Button variant="success" href={item.link}>
         Check it out!!
        </Button>
        <h4>{item.title}</h4>
        </Card.Body>
        <Card.Img className="image" variant="bottom" alt='images' src={item.image} />
        <p>${item.price} {item.description}</p> 
        <p>{item.source}</p> 

      </Card>
        
       
         
        })
      }
  
  
    </div>
  )
}
