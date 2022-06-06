import { TYPES } from "../Actions/carritoActions";
import Item from "../Item/item";
import { collection, query, getDoc,doc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import { UseEffect, UseState } from "react";

export const carritoInitialState =  {
      
cart: []
  
};

export function carritoReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const docRef = doc(db, "paintings", "id");
      const docSnap = getDoc(docRef);

      if (docSnap === action.payload) {
          console.log("Document data:", docSnap.data());
    } else {
         // doc.data() will be undefined in this case
            console.log("No such document!");
     }
      
      return {
        ...state,
        cart: [...state.cart, ],
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
