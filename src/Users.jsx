// import React from "react";
// import { useState } from "react";
// import Admin from "./Components/Admin";
// import Navbar from "./Components/Navbar";
// function Users() {
//     let [login, setLogin] = useState(null)
//     let [show, setShow] = useState(true)

//     return (
//         <div>
//             {login == null && <button onClick={() => { setLogin("user") }} id="user">user</button>}
//             {login == null && <button onClick={() => { setLogin("Admin") }} id="admin">Admin</button>}

//             {login === "user" && <Navbar />}
//             {login === "Admin" && <Admin />}

//         </div>
//     )

// }
// export default Users
import {Link} from "react-router-dom"
function Users() {



    return(
        <div>
            <Link to="/home"><button>HOME</button></Link>
            <Link to="/admin"><button>ADMIN</button></Link>
        </div>
    )

}

export default Users

