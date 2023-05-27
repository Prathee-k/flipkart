// import React from "react";
// import "./Navb.css"
// const Nav = () => {
//     return (
//         <div>
//             <a href="/"><img id="logo" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="No image" /></a>
//    <input type="text" id="inp" placeholder="search for products,brands and more"/> <img className="search" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAAlRJREFUWEftl+0xZUEQhl8RsBGwEbARIAI2AkRgNwJEgAgQASLYFYHdCBDBEsGqh5mq1s6c7nOPcm8pXXV+MF/P9Nsfc+c0gzY3g0z6EFBLkjYkrUlacF7+LelS0p+x3s96Coi9AhOdeStpX9JZNLE1noE6krQ7wQF47ruk+6Fr+6CQ55ekFbfpX0kcyFcPxJN8q24u4+tDJe2DIjaWzSFXRRZgWkbMId2WmQDYN0nImrIWlJeM+NhO7fg8ibknZj4XBCxlXVDIgGzVhgLVdR7soHgxBOuCQp4aG0gG5KSGlGQthoxfM4HvoYiJG0NAkPbFUARLshBL82XijqTTaJGH+iHpsCwiy3zmRft1jdv4pLhuRpt4qItSsVl3LAnIsQbEuZHwS7Shh7LxROEDcqz5kAgLtp9ga9PYeLKX+W/+GAxlPfVWUAT7v7eCSteVQF9b91LJ411p68rYGlVZ7Z4TZR8l4NrcnGKX7lkNj7F+sYz9lESJ6LWuoLObTNpi6qG21TxIIhPDp0wXlO9ZqSrccXW8Tg+tL9R0jLbS02Yh5w0F80B3xUuRck/jLSjfs5hLwFLlI/fjaVqVfcNThCnGKesrZNwWj9VmyoYA0VD5P+lN/HE4j0FSHyDipstYh8dDi6orB3BL+wINNy0TkIwOwa+faimwCKpuhnQ0Z+u1FhxZRtqzBgPEPo9DsCwUmyMTHZ8PqSxglRJZOdTH3SCwIVBZ2Vrz0mDvCZWW8r2hPBiyEwov5J4GVAWj5LwCYnBaUDVxOgvxNKGaifMJla0pM+mpR1f5dyZSyaCaAAAAAElFTkSuQmCC"/>
    
    
//     <button id="btn">Login</button>
//     <span id="bs">Become a Seller</span>
//     <span id="more">More</span>
  
//     <img id="kart" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAAi5JREFUWEftl7FOVEEUhr99ArCVQmgssFDsCZDQWYC+gFBaAYWxIUBCaAhE5QXUBzBqtCBSaHgBeAPgCYAngPzk3s3Z2b33nnvnTrLFngY2O/PPNzPn/Ge2wxBGZwiZGEF5byU8qRfAmJl8BVx6xdoaF0L9B+YC8XNgpq0FPToeKOl8BtY9gm2MCaE+AbpCxTjwPPv/BpgC9Dd5VFWfIPIc2wAEnTyqoHaA7YxCCa/TSh5VUJPAhaFYAFQMSaMKSov/BJaSUoAqXBt+yFkP1DzwLzGU5Lu34IHSBOXTk8RgytcHo/ZCyaM+Gnt41ALgV+BtpvMLWM41vVDyLO0it4dVQKIxYe2mR88LpcXtzlSByoGmsQJ8ySbfZkbd1aoDJac/MxTqh6qaJmEr+hsgyEZQmmQbdp+Yky70vr7N1TkprWmPvWk/tEWjp5Ege6IulCbH9kNrLwP7aRMoNeW1bGt1+2GYl11viskpzY3ph4XeFAul+bZ6VIH67AnlkzxPUeh1Ta5PgnLfHx6KgjF93tTGSUlDJ5S/TOvylT6vm55Unls9puckU/Uqtwqf1jFQTob6w2KgJoAj4CVwDLwrWf4pcAg8A/QikD8VRgzUH+CVUd4HPhSsdArMmu82gb0iqhio66C7l70c7gIAWcjrFFDfgTdGeBfYKljoBFg0370HDlJA6cGn16i6/N+Sq9PajwFd7zTw2/xsG8gVc331y8o5YwTlPCj3rxmvXivj7gFCHFomrqTVkgAAAABJRU5ErkJggg==" color="white"/>
//     <span id="cart">Cart</span>
//         </div>
//       );
// }
 
// export default Nav;

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        
    <nav>
        <div id="logo">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png&quot; alt="" />
            <Link to="/">Explore plus </Link>
        </div>
        <div id="searchbar">
            <input type="search" placeholder="Search for products, brands and more"/>
            <button> <i className='bx bx-search'></i> </button>
        </div>

        <Link to="">Home</Link>

        <Link to="/admin">Become a seller</Link>

        <Link to="/cart"><i className='bx bxs-cart-alt'></i> cart </Link>

    </nav>
    
     );
}
 
export default Navbar;