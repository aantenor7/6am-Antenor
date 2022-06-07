import { TYPES } from "../Actions/carritoActions";
import { collection, query, where,documentId,getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import {useState , useEffect} from "react";

export const carritoInitialState =  {
      
cart: []
  
};


export function carritoReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      

      const itemBuy = 
      query(
        collection(db, "paintings"),
        where(documentId(), "==", action.payload).get());
       
    console.log(itemBuy);
    

      
      return {
        ...state,
        cart: [...state.cart, itemBuy ],
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
  };
};
