// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Cart from './Components/Cart';
// import Clothing from './Components/Clothing';
// import Hme from './Components/Hme';
// import Navigation from "./Components/Navigation";
// import Shoes from './Components/Shoes';

//     <Router>
//   <div id='App' >
//   <Navigation/>

//     <Switch>
// <Route exact path="/"><Hme/></Route>
// <Route path="/Shoes"><Shoes/></Route>
// <Route path="/Cart:id"><Cart /></Route>
// <Route path="/Cloth"><Clothing/></Route>
//     </Switch>


// </div>
// </Router>
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Users from './Users';
import HomeNew from './Components/HomeNew';
import Cart from './Components/Cart';
import DisplayNew from './Components/DisplayNew';
import Admin from './Components/Admin';
import Productdetails from './Components/Productdetails';
import AddComponent from './Components/AddComponent';
import Update from './Components/update';


function App() {
  return (
      <Router>
        <div className="App">
        <Switch>
                <Route exact path="/"> <Users/>         </Route>    
                <Route path="/home"><HomeNew/>               </Route>
                <Route path="/admin">   <Admin/>            </Route>

                <Route path="/">     <AddComponent/>  </Route>  
                <Route path="/cart">   <Cart/>            </Route>
                <Route path="/productDetails:id">  <Productdetails/> </Route>
                <Route path="/updateproduct:id">   <Update/>           </Route>
{/* 
                <Route exact path="/"> <Login/>           </Route>    
                <Route path="/user">   <Home/>            </Route> 
                <Route path="/addnewproduct">  <Addproducts/>     </Route>   
                <Route path="/cart">   <Cart/>            </Route>
                <Route path="/productDetails:id">  <Productdetails/> </Route>
                <Route path="/admin">   <Admin/>            </Route>
                <Route path="/updateproduct:id">   <Update/>            </Route> */}

        </Switch>
        </div>
      </Router>
  );
}

export default App;