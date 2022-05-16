import React from 'react';
import Carrito from "../Counter2";
import "../card2.css";
import "../Item/carrito.css";

const item = ({data}) => {
console.log(data);    
  return (  
   

<div>       
  
<div className="shell">
        <div class="container">
      <div class="row">
        <div>
          <div class="wsk-cp-product">
            <div class="wsk-cp-img">
              <img src={data.img} alt="Product" class="img-responsive" />
            </div>
            <div class="wsk-cp-text">
              <div class="category">
                <span>{data.nickname}</span>
              </div>
              <div class="title-product">
                <h3>{data.name}</h3>
              </div>
              <div class="description-prod">
                <p>{data.portrayed}</p>
              </div>
              <div class="card-footer">
                <div class="wcf-left"><span class="price">{data.birthday}</span></div>
                
              </div>
    
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
  
</div>  


   
  )
}

export default item ; 