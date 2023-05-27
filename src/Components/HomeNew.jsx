//  import { useEffect } from "react"
//  import { useState } from "react"
// import DisplayNew from "./DisplayNew"

//  function HomeNew(){

//  let [products,setProducts]=useState(null)


//  useEffect(()=>{
//     setTimeout(()=>{
//      fetch("http://localhost:4000/products")
//      .then((res)=>{res.json()})
//      .then((data)=>{setProducts(data)})
//     },3000)
//  },[])

//      return(
//          <div>
//          {products &&   <DisplayNew products={products} title={"ALL PRODUCTS"} />}
//          </div>
//      )
//  }
//  export default HomeNew
 

import { useEffect } from "react"
import { useState } from "react"
import DisplayNew from "./DisplayNew"
import load from "../Images/loader.png"
import useFetch from "../UseFetch"
import Navbar2 from "./Navbar2"
import Navbar from "./Navbar"
import DisplayProducts from "./DisplayProducts"
function HomeNew() {
    let { data: products, pending, error } = useFetch("http://localhost:4000/products")
    return (
        <div>
<Navbar2/>
<Navbar/>
            {error && <h1>{error}</h1>}
            {pending == true && <img src={load} className="loader" />}
            {products && <DisplayProducts products={products} title={"ALL  PRODUCTS"} />}
        </div>
    )
}
export default HomeNew;
