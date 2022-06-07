import React from "react";
import { useReducer } from "react";
import { carritoReducer } from "../../components/Reducers/carritoReducer";
import { carritoInitialState } from "../../components/Reducers/carritoReducer";
import Item from "../../components/Item/item";
import { TYPES } from "../../components/Actions/carritoActions";

const Carrito = ({data}) => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  const [cart] = state;
  

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
      <h2>{data.name}</h2>
      <h2>{data.price}</h2>
    </div>
  );
};

export default Carrito;
