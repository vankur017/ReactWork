import {LOGO_URL} from "../utils/constants"

export const Header =()=>(
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
            </ul>
        </nav>
    </div>
)
// export default Header;