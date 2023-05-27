import { useParams } from "react-router-dom";
import Navbar from './Navbar'
import loader from '../Images/loader.png'
import useFetch from "../UseFetch";

const Productdetails = () => {

    let {id} = useParams();

    let {data :product , pending , error} = useFetch(`http://localhost:4000/products/${id}`)


    let handleCart = ()=>{

       let cartArray = localStorage.getItem("cart");
       cartArray = JSON.parse(cartArray);

       let present = cartArray.some((item)=>{return item.id == product.id})

       if(present == false)
       {
        cartArray.push(product);
        cartArray = JSON.stringify(cartArray);
        localStorage.setItem("cart" , cartArray)
        alert("item has been added to the cart");
       }
       else
       {
        alert("item already been added")
       }
    }




    return ( <div>
        <Navbar/>
        <h1> product details page</h1>
        <hr />

        {error && <h1>{error}</h1>}
        {pending==true && <img src={loader} className="loader"/>}
        {product && <div className="productdetail">
                        <img src={product.productPic} alt="image not found" />
                        <h2>{product.brand}</h2>
                        <p>{product.description}</p>
                        <span>{product.discountPrise}</span> <small>{product.mrp}</small>
                        <button id="cart-btn" onClick={handleCart}>Add to cart</button>
                    </div>}        
    </div>  );
}

export default Productdetails;