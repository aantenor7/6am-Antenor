import React from 'react';
import { useEffect, useState } from "react";
import Item from "../../components/Item/item";
import axios from 'axios';
import "../../components/Container/itemList.css";

import "../../components/card2.css";

const BetterCalSoul = () => {
 
const [items,setItems] = useState([]); 

  useEffect(() =>{
            axios('https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul').then((res) =>
              setItems(res.data)
              
            );
  },[]);


  return (
    <div>
      <div className='ItemList-container'>
      {items.map((item) => { 
        return(
          <div key={item.char_id}>
          
          
              <Item data={item}/>
            
                
              </div>

        );
      })}
      </div>
    </div>
  )
}

export default BetterCalSoul;