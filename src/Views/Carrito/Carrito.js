import React from "react";
import Item from "../../components/Item/item";
import { TYPES } from "../../components/Actions/carritoActions";
import { useDispatch , useSelector } from "react-redux";


const Carrito = () => {
  const state = useSelector((state) => state)
  const cart = state.cart;
  console.log('HOLA', cart);
  const dispatch = useDispatch();
  

  const delFromCart = () => {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.REMOVE_ALL_FROM_CART });
  };

  return (
    <div>
     <h3>Carrito</h3>
      <article className="box">
        <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <Item
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </article>
      
    </div>
  );
};

export default Carrito;
