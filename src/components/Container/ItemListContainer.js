import React from "react";
import { useEffect, useState } from "react";
import {producto} from "../../productos.js";
import ItemList from "../ItemList/itemList.js";

const ItemLIstContainer = () => {
  const [items,setItems] = useState([]);

useEffect(() =>{
          setTimeout(() => {
            
          
    const data = new Promise((resolve, reject) =>{
    resolve (producto);
      });

    data.then((data) =>{
    setItems(data)

    });

    data.catch((err) =>{
    console.log(err)
}
);
}, 2000);
}, []);  
  
return (
    <>  
    <ItemList items={items} />
    </>
  );      
};

export default ItemLIstContainer; 