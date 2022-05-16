import React from 'react';
import { useEffect, useState } from "react";
import Item from "../Item/item";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./itemList.css";

import "../card2.css";

const ItemListContainer = () => {
 
const [items,setItems] = useState([]); 

  useEffect(() =>{
            axios('https://www.breakingbadapi.com/api/characters').then((res) =>
              setItems(res.data)
              
            );
  },[]);


  return (
    <div>
      <div className='ItemList-container'>
      {items.map((item) => { 
        return(
          <div key={item.char_id}>
          
          <Link to={`/detail/${item.char_id}`}>
              <Item data={item}/>
            </Link>
                
              </div>

        );
      })}
      </div>
    </div>
  )
}

export default ItemListContainer;