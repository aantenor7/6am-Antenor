import React from 'react';
import { Card,CardGroup } from 'react-bootstrap';
import Carrito from "../Counter2";
import "../card2.css";

const item = ({item}) => {
    const {name,price,img} = item;   
  return (  
   <div>

<CardGroup className="card-counter">

  <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {price}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Carrito></Carrito>
    </Card.Footer>
  </Card>
</CardGroup>
  
  
   </div>
  )
}

export default item ; 