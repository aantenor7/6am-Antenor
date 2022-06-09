import { TYPES } from "../Actions/carritoActions";
import { query,collection, doc, where,documentId,getDocs} from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import {useState , useEffect} from "react";

 
export const carritoInitialState =  {
      
cart: []
  
};

  
export function carritoReducer(state = carritoInitialState, action) {
   
  
console.log(state,action);
    
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
    
      console.log(state,action);
      return {
        ...state,
        cart: [...state.cart, action.payload ],
        
        
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
