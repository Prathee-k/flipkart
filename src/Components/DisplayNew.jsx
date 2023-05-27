// function DisplayProducts({products}){
//     return(
//         <div>
//             <div>
//             {products.map((element)=>{
//                 return(<div> <img src={element.productPic} alt="no image" />
//                 <h1>{element.description}</h1>
//                 <h2>{element.brand}</h2>
//                 <h3>{element.color}</h3>
//                 <span>{element.discountPrise}</span><br />
//                 <span>{element.mrp}</span>
//                      </div>

//                 )
//             })}
// </div>
//         </div>
        
    

//     )
// }
// export default DisplayProducts
import React from "react";

function DisplayNew({products,title}){
    return(
        <div className="display">
            <h1 id="title">{title}</h1>
            <div>
            {products.map((element)=>{
                return(
                <div>
                 <img src={element.productPic} alt="no image" />
                <h2>{element.description}</h2>
                <h2>{element.brand}</h2>
                <h3>{element.color}</h3>
                <span>{element.discountPrise}</span><br />
                <span>{element.mrp}</span>
                     </div>

                )
            })}
</div>
        </div>
        
    

    )
}
export default DisplayNew;