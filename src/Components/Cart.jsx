
import React from "react";
import { useParams } from "react-router-dom";
const Cart = () => {
    let {id}=useParams();
    return (
        <div>
            <h1>Cart component</h1>
        
<h2>{id}</h2>        </div>
      );
}
 
export default Cart;
