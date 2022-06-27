import React from "react";
import { useEffect, useState } from "react";
import Item from "../Item/item";
import "./itemList.css";
import "../card2.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import { initialState } from "../Reducers/carritoReducer";

const ItemListContainer = () => {
  const [paintings, setPaintings] = useState([]);
  
  

  useEffect((state = initialState) => {
    const getPaintings = async () => {
     
      const q = query(collection(db, "paintings"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setPaintings(docs);  
        state.paintings = docs.slice();
        
      });
    
      
    };
    
    getPaintings();
    
  }, []);
  

  return (
    <div>
      <div className="ItemList-container">
        
        {paintings.map((item, state = initialState) => {
          return (
               
            <div key={item.id}>
              
              <Item data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
