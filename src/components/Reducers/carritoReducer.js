import { TYPES } from "../Actions/carritoActions";
import Item from "../Item/item";

export const carritoInitialState = {
  cart: [],
};

export function carritoReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.items.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CARRITO: {
    }
    default:
      return state;
  }
}
