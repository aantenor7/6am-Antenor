import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { delFromCart} from "../../components/Actions/carritoActions";
import Form from "../../components/Form/Formulario";

const Carrito = () => {
  const state = useSelector(state => state);
  const cart = state.carrito.cart;
  const dispatch = useDispatch();
  
  return (
    
      <div>
        <div className="ItemList-container">
          {cart.map((data) => {
            return (
              <div style={{ borderBottom: "thin solid gray" }}>
              <h4>{data.name}</h4>
              <h5>
                ${data.price}.00 x {data.quantity} = ${data.price * data.quantity}.00
              </h5>
              <button onClick={() => dispatch(delFromCart(data.id))}>Eliminar Uno</button>
              <br />
              <button onClick={() => dispatch(delFromCart(data.id, true))}>Eliminar Todos</button>
              <br />
              <br />
            </div>
            );
          })}
        </div>
        <Form/>
      </div>
    );
  };
    
export default Carrito;
