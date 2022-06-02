import React from "react";
import { useReducer } from "react";
import { carritoReducer } from "../../components/Reducers/carritoReducer";
import { carritoInitialState } from "../../components/Reducers/carritoReducer";
import Item from "../../components/Item/item";
import { TYPES } from "../../components/Actions/carritoActions";

const Carrito = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  const [cart] = state;

  const addToCart = (char_id) => {
    console.log(char_id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: {} });
  };
  const delFromCart = () => {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.REMOVE_ALL_FROM_CART });
  };

  return (
    <div>
      <h2>Carrito De Compras</h2>
      <h3>Productos</h3>
      <article>
        {cart.map((item, index) => (
          <Item key={index} data={item} addToCart={addToCart} />
        ))}
        ;
      </article>
    </div>
  );
};

export default Carrito;
