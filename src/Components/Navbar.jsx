// import React from "react";
// function Navbar() {
//   return (
//     <nav>
//       <div className="leftlink">
//         <div className="logo">
//           <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" height={"20.11"} width={"75"} alt="" />
//           <div className="exploreplus">
//             <a href="/">
//               Explore
//               <span>Plus</span>
//               <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" height={"10"} width={"10px"} alt="" />
//             </a>
//           </div>
//         </div>
//         <div className="input">
//           <input type="text" placeholder="Search for Products,Brnads,More" />
//           <button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaVJREFUSEu1lT9Lw0AYxp+7gA6CNaOTg4s9sLNdutrFXVCkIDhYZ/0EOji3DgUxin4CF1110NUMwcXBT3A24GChd3Ixqdea3EWaZLvk3vf3/n1CUPJDSvaPTMDCbrBEBN2HFA0AtTgQH4Q+SCrOPs7Ze57gUgFuKzgF0DY6ILTDL1aObJA/ALcVPANYjQ1vIGiHX6346uzuvNZAxQGArSQj7rG6CTIG0CIPIeh64njSQQy6BzAPoMs9dpgFGQGimg8RRBcFrWc5TxzFkCd1lg5YVk9GAC16Y0R6pG4r6MXlyrTRAT+1zxF9ShZ+Vi90wKcy5B6bs03GRBZGu6IAIffYYlpgBZWIPHKv2rQBkuUqp8lTjGkoHaxZxzTa1EQiJPqQtGlcNCLuQFCBxAm/ZMfWRRuNni4VUl5DOt0xqSDDNgjZ1hz6mJlt8t5y39iDidGziV0IiQ4INmLdyoSY5XoYKaqSayV+IUBeAOlLB11Vc3fvrYLBl9Ik9T0VMvUPxwaZGhANx1gmZJN71duk5IUAfiGDhu5cvS8MkHtM/yN0ee6WnsE3lNLVGXpGhZMAAAAASUVORK5CYII=" alt="" /></button>
//         </div>
//       </div>
//       <button id="login">Login</button>
//       <a href="/" id="become_a_seller">Become A Seller</a>
//       <span>More</span>
//       <div className="cart">
//         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYlJREFUSEvVlS9Mw0AUxr8rCQbosbebYAI0JKBBzCPwkIAeBoOBBDQkYDAgmAaBBjGPAA0JzGJmaG+0A0NCjzShSxl3bfengpo2ee/e776v790x5PywnOvj/wBc6R8rqA0APHRFEB8L30NRIKVfCaDqcbuHCnCld6WAFQC7gvhpHDSwgmarNTOqrKewqAW7TMQ8LcCR3j2A+X67SoFdlsiudq/vKHCk/wyo6X4BFkaWiMYfEgBv+wDbM+1EB3akF3bNOYBHQXxRl9NREPPSs2DPdntpAES2bgriF4mAMOjKdl0hqAAwLoiKSPm+EODrDoAviE+ZrP3VRTHJt4L4ctL/eJV+jUGtM7CzItk7mQBSKh7AbwCwP1kwVy4UXnQLf/KaYSwpTzvJ0c4AdSho8sDg/RaAIwbcFImvJin9M2i6sTcVUGBrJbKvewKEyRmHztiaQz0q0gZTexa5rfaJUkGVMatWLExsx4skxVLnIEpwpPcRfUfHbpZYZkDuCtJ87SU+8H2QBssd8A3cvKcZPlG2AgAAAABJRU5ErkJggg==" alt="" />
//         <span>Cart</span>
//       </div>
//     </nav>
//   )
// }
// export default Navbar;


// nav{
//   background-color: ;
//   width: 100%;
//   height: 36px;
// padding: 0 150px;
// display: flex;
// align-items: center;
// justify-content: space-evenly;
// align-items: flex-end;
// color: white;
// }
// nav a{
//   color: white;
//   text-decoration: none;
// }
// .logo{
//   display: grid;
// }
// logo img{
  
// }

import React from 'react'
import HomeNew from './HomeNew'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        {/* header part starts */}
      <section id="navbar">
        <article>
            <main className='logo'>
                <figure>
<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />                </figure>
           <a href="https://www.flipkart.com/search?q=laptop+anime+sticker+&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=2">     <p>Explore <span>Plus</span></p></a>
            </main>
            <main className='searchBar'>
                <input type="text" placeholder='Search for products, brands and more' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </main>
            <main className='anchorList'>
            <button>Login</button>
                <ul>
                    <li><a href=""> Become a seller</a></li> 
                    <li><a href="">More</a></li>
                    <li><a href=""><i class="fa-sharp fa-solid fa-cart-shopping"></i>  Cart</a></li>
                   
                </ul>
            </main>
        </article>
      </section>
        {/* header part Ends */}
<HomeNew/>
    </div>
  )
}

export default Navbar
