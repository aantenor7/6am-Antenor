import React from "react";
import { Carrito } from "../../Views/Carrito/Carrito";
import "../card2.css";
import "../Item/carrito.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import { TYPES } from "../../components/Actions/carritoActions";
import { UseReducer } from "react";
import { carritoReducer } from "../../components/Reducers/carritoReducer";
import { carritoInitialState } from "../../components/Reducers/carritoReducer";



const item = ({ data }) => {
  //const [state, dispatch] = UseReducer(carritoReducer, carritoInitialState);
  //const [cart] = state;
 
  //const addToCart = (id) => {
    //console.log(id);
    //dispatch({ type: TYPES.ADD_TO_CART, payload: {} });
  //};
  

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
                      <Button
                        variant="primary"
                      //onClick={() => addToCart(data.id)}
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

export default item;
