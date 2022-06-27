import React from "react";
import Contador from '../Counter';
import "../card2.css";
import "../Item/carrito.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { addToCart} from "../Actions/carritoActions";
import { useDispatch } from "react-redux";


const Item = ({ data }) => {
const dispatch = useDispatch();  
  return (
    <div>
      <div className="shell">
        <div className="container">
          <div className="row">
            <div>
              <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                  <Link to={`/detail/${data.id}`}>
                    <img
                      src={data.img}
                      alt="Product"
                      className="img-responsive"
                    />
                  </Link>
                  
                </div>
              
                <div className="wsk-cp-text">
                <div className="category">
                  <span> ${data.price} </span>
                  </div>
                  <div className="title-product">
                    <h3>{data.name}</h3>
                  </div>
                  <div className="description-prod">
                    <Link to={`/estilos/${data.style}`}>
                      {data.style}
                      
                    </Link>
                  </div>
                  <div className="card-footer">
                    <div className="wcf-center">
                      <span className="price"></span>
                      <Contador></Contador>
                      <Button
                        variant="primary"
                      onClick={() => dispatch(addToCart(data.id))}
                      >
                        Agregar al Carrito 
                      </Button>

                      <Link to="/Carrito">
                        <Button variant="primary">Ir al Carrito</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
