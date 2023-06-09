

import { Link } from "react-router-dom";
import useFetch from "../UseFetch";
const Admin = () => {

    let {data:products , pending , error} = useFetch("http://localhost:4000/products&quot;")

    let handleDelete = (id)=>{

        fetch(`http://localhost:4000/products/${id}` , {method:"DELETE"})
        .then(()=>{  
            alert("item has been deleted");
            window.location.reload();
        })

    }


    return (
        <div>
            <h1> ADMIN PAGE </h1>
            <hr />

           {products && <table border="4px">
                <thead>
                    <th>Sl no</th>
                    <th>Product</th>
                    <th>Product type</th>
                    <th colSpan="2">Action</th>
                </thead>
                <tbody>
                    {
                        products.map((item , i)=>{
                            return(
                                <tr>
                                    <td>{i+1}</td>
                                    <td><img src={item.productPic} width="50px" height="50px" /></td>
                                    <td>{item.productType}</td>
                                    <td><button>Edit</button></td>
                                    <td><button onClick={()=>{handleDelete(item.id)}}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
           }


            <Link to="/addnewproduct">
            <button> add new product</button>
            </Link>





        </div>
     );
}
 
export default Admin;