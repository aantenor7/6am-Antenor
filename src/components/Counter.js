import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import  swal  from 'sweetalert';
import "./card.css";

function Counter ()  {
const [stock,setStock] = useState (5);    
const [count,setCount] = useState (0);


const suma = () => {
    if (count === stock) {
        swal ("Lo siento no tenemos " + count + " unidades de ese Articulo en este momento"); 
    } else {
        setCount (count + 1);
        
    }
}

const resta = () => {
    if (count < 1 ) {
        setCount (0);
    } else {
        setCount (count - 1)
        
    } 
    
}
const addToCart = () => {
    swal ('Tu Producto Se Agrego Correctamente al Carrito')
    setStock (stock - count)

}
        return (
            <div>
                
                <Card className="card-counter">
                <Card.Img src="./handGrip.jpg" />
                <Card.Body>
                    <Card.Title style={{textAlign: 'center'}}>HandGrip</Card.Title>
                    <Card.Text style={{textAlign: 'center'}}>
                    Grip X-Cross BR fue desarrollado para mejorar el rendimiento de los practicantes
                    de ejercicios con barras, previene la formación de ampollas en las palmas de las manos.
                    </Card.Text>
                    <div style={{textAlign: 'center'}}>
                    <Card.Text >
                    <Button variant="primary" onClick={resta}>-</Button>
                    <Button type="button" class="btn btn light btn-lg">{count}</Button>
                    <Button variant="primary" onClick={suma}>+</Button>
                    </Card.Text>
                                       
                    <Button variant="primary" onClick={addToCart}>
                        Add To Cart
                                        
                    </Button>
                    </div>
        </Card.Body>
        </Card>
       
            </div>
        );
    }


export default Counter;


