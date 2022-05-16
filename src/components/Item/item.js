import React from 'react';
import Carrito from "../Counter2";
import "../card2.css";
import "../Item/carrito.css";

const item = ({data}) => {
console.log(data);    
  return (  
   

<div>       
  
<div className="shell">
        <div className="container">
      <div className="row">
        <div>
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img src={data.img} alt="Product" className="img-responsive" />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>{data.nickname}</span>
              </div>
              <div className="title-product">
                <h3>{data.name}</h3>
              </div>
              <div className="description-prod">
                <p>{data.portrayed}</p>
              </div>
              <div className="card-footer">
                <div className="wcf-center"><span className="price"><Carrito></Carrito></span></div>
                
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