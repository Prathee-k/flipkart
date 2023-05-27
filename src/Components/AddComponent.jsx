import { useRef } from "react";
import {useHistory} from "react-router-dom"
import Navbar from "./Navbar";

const AddComponent = () => {
   let h= useHistory()

let pic=useRef()
let brand=useRef()
let desc=useRef()
let discount=useRef()
let mrp=useRef()
let color=useRef()
let Fabric=useRef()
let Type=useRef()
let rate=useRef()

let handleSubmit=(e)=>{
    e.preventDefault()
    let newProduct={
        productPic: pic.current.value ,
        brand:brand.current.value,
        description: desc.current.value,
        discountPrise: discount.current.value,
        mrp: mrp.current.value,
        color: color.current.value,
        fabric: Fabric.current.value,
        productType: Type.current.value,
        usage: "",
        rate: rate.current.value,
        size: []
    }

   let genderOptions= document.getElementsByName("gender")
   genderOptions.forEach((inp)=>{
    if(inp.checked==true)
    {
        newProduct.usage(inp.value)
    }
   })
   let sizeAvailable=[]
   let sizeOptions=document.getElementsByName("size")
   sizeOptions.forEach((inp)=>{
    if(inp.checked==true)
    {
        sizeAvailable.push(inp.value)

    }
   })
   newProduct.size=sizeAvailable
   fetch("http://localhost:4000/products",{
    method:"POST",
    headers:"application/JSON",
    body:JSON.stringify(newProduct)
   })
   .then(()=>{
    alert("new product has been added")
    h.push("/home")
   })
}    
    return (
        <div className="add-product">
            <Navbar/>
            <h1>Add the products</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label>Picture</label> <input type="url" ref={pic} />
                <label>Brand</label> <input type="text" ref={brand} />
                <label>Description</label>  <input type="text" ref={desc} />
                <label>Price after Discount</label> <input type="number" ref={discount} />
                <label>MRP</label> <input type="number" ref={mrp} />
                <label>color</label> <input type="text" ref={color} />
                <label>Fabric</label> <input type="text" ref={Fabric} />
                <label>ProductType</label> <input type="text" ref={Type} />
                <label>Usage</label> <div>
                    <input type="radio" name="gender" /><label>Male</label>
                    <input type="radio" name="gender" /><label>Female</label>
                    <input type="radio" name="gender" /><label>Unisex</label>
                </div>
                <label>Rating</label><input type="number" ref={rate} step="0.1" min="1" max="5" />
                <label >Size</label><div>
                    <input type="checkbox" name="size" /><label >S</label>
                    <input type="checkbox" name="size" /><label >M</label>
                    <input type="checkbox" name="size" /><label >L</label>
                    <input type="checkbox" name="size" /><label >XL</label>
                </div>
                <input type="submit" />

            </form>
        </div>
    );
}

export default AddComponent;