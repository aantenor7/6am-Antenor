import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import  swal  from 'sweetalert';
import "./card.css";
import { Link } from 'react-router-dom';

function Counter2 ()  {
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
    console.log (data.char_id)
}
        return (
            <div>
           
                    
                    <div style={{textAlign: 'center'}}>
                    <Card.Text >
                    <Button variant="primary" onClick={resta}>-</Button>
                    <Button type="button" class="btn btn light btn-lg">{count}</Button>
                    <Button variant="primary" onClick={suma}>+</Button>
                    </Card.Text>
                                       
                    <Button variant="primary">Agregar al Carrito</Button>
                    <Link to='/Carrito'><Button variant="primary">Ir al Carrito</Button></Link>
                    </div>
                    
        
                  
            </div>
        );
    }


export default Counter2;


