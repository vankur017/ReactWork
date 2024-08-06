import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { json, useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants"
import { Link } from "react-router-dom"; 
import RestaurantMenu from "./RestautrantMenu";
import Cart from "./Cart";
 



 const Header =()=>{
  
    
    const [btnName, setBtnName] = useState("login")

 

    return(
    <div className ="header">
        <div className="logo-container">
            <Link to="/">
                <img className="logo" src={LOGO_URL}/>
            </Link>
        </div>
        <nav className ="nav-items">
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about"> About Us</Link></li>
               <li> <Link to="/contact">Contact Us</Link></li>
               <li className="cart-logo" >
                <span className='cart-logo-no' 
                >
                    
                </span>
                <Link to="/cart"></Link>
               <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="40px" viewBox="0 0 24 24" fill="none">
                
                    <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                  
                </svg>

                 </li>
               <button
                className="login" 
                onClick={()=>{
                  btnName==="login" 
                  ? setBtnName("logout")
                  :setBtnName("login")
                }}
               >
                {btnName}
                </button>
            </ul>
        </nav>
    </div>
    )
}
export default Header