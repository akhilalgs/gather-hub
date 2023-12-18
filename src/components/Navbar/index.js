import { Link } from "react-router-dom"

import { TbCircleLetterG } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";

import "./index.css"

const Navbar = () => {



    return (
        <nav>
            <Link to="/" className="link">
                <div id="gather-hub-logo-container">
                    <TbCircleLetterG className="nav-logo" />
                    <h1 className="gather-hub">Gather Hub</h1>
                </div>
            </Link>


            <ul id="navbar-options-container">
                <Link className="link" to="/contact-us">
                    <li>Contact us</li>
                </Link>
                <li>Pricing</li>
                <li>Support</li>
            </ul>
            <div id="login-logout-buttons">
                <Link to="/signin"><button type="button">Log In</button></Link>
                <Link to="/signup"><button id="signup-button" type="button">Sign Up <BsArrowRight /></button></Link>

            </div>
        </nav>
    )


}



export default Navbar