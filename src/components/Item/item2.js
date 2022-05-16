import React from 'react';
import { Card } from 'react-bootstrap';
import Carrito from "../Counter2";
import "../card2.css";
import "../Item/carrito.css";

const item = ({data}) => {
    
  return (  
   

<div>       
  
  <Card className='card text-center'>
    <Card.Img variant="top" src={data.img} />
    
    <Card.Body>
      <Card.Title>{data.name}</Card.Title>
      <Card.Text>
        {data.char_id}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Carrito></Carrito>
    </Card.Footer>
  </Card>
  
  
</div>  


   
  )
}

export default item ; 