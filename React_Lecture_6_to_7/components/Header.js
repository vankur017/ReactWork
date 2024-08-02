import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom"; 


 const Header =()=>{
    
    const [btnName, setBtnName] = useState("login")
      
    console.log("header rendered");


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
               <li> Cart</li>
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