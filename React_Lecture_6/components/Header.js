import {LOGO_URL} from "../utils/constants";
import {useState} from "react";



 const Header =()=>{
    
    const [btnName, setBtnName] = useState("login")
      
    console.log("head");

    return(
    <div className ="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
        </div>
        <nav className ="nav-items">
            <ul>
               <li><a href="#">Home</a></li>
               <li> <a href="">About Us</a></li>
               <li> <a href="">Contact Us</a></li>
               <li> <a href="">Cart</a></li>
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