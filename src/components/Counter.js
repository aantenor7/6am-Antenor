import React from 'react';
import {useReducer} from 'react';
import {contadorReducer,contadorInitialState,contadorInit} from '../components/Reducers/contadorReducer';
import { TYPES } from '../components/Actions/contadorActions';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./card.css";
import { useState } from 'react';

export const Carrito = ({data}) => {
 
 const [state,dispatch] = useReducer (contadorReducer,contadorInitialState,contadorInit)
 const [stock,setStock] = useState (5);
 const agregar = () => dispatch({type: TYPES.INCREMENT});
 //const agregarUsuario = () => dispatch({type: TYPES.INCREMENT_USER});
 const restar = () => dispatch({type: TYPES.DECREMENT});
 const reset = () => dispatch({type: TYPES.RESET});

   
           
    return (      
                
                <div style={{textAlign: 'center'}}>
                <Card.Text >
                <Button variant="primary" onClick={restar}>-</Button>
                <Button type="button" class="btn btn light btn-lg" onClick={reset}>
                    {state.contador}
                    </Button>
                <Button variant="primary" onClick={agregar}>+</Button>
                </Card.Text>
                                   
                
                </div>
                
    
 );             


}