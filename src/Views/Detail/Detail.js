import React from 'react';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import Item from '../../components/Item/item';

const Detail = () => {
  
  let id = useParams();
  let userID = id.id;

  console.log(userID);
  
  const [itemdetail,setItemdetail] = useState([]);
  
  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters/${userID}`).then((res)=>
    setItemdetail(res.data));

}, [userID]);

  return (
    <div>
      {itemdetail.map((item)=> {
      return(
        <div key={item.char_id}>
         <Item data={item} /> 
         </div>
      );  
      })}
             
      </div>
  );
};

export default Detail;