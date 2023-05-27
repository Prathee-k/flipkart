import { Link } from "react-router-dom";

const Navigation = () => {
    return (  
        <nav>
            <div>
                {/* <a href="/">home</a>
                <a href="/Cloth">Clothing</a>
                <a href="/Cart">Cart</a>
                <a href="/Shoes">Shoes</a> */}
                <Link to="/">home</Link>
                <Link to="/Cloth">Clothing</Link>
                <Link to="/Shoes">Shoes</Link>
                <Link to="/Cart:id">Cart</Link>

            </div>
        </nav>
    );
}
 
export default Navigation;