import React from "react";
import "./NavBar.css"
import CartWidgets from "../CartWidegts";
import img from "../../img/5842fe18a6515b1e0ad75b3d.png"
import {NavLink} from "react-router-dom" 


function NavBar () {
    return (
        <div className="gg">
            <div className="copa"><img src={img} alt="" /></div>
            <nav className="navbar-mayor">
                <NavLink to="/">Home</NavLink>
                <NavLink to="">Category</NavLink>
                <NavLink to="">Information</NavLink>
            </nav>    
            <div className="carro">
                <CartWidgets/>
            </div>
        </div>    
        
        

    )
}

export default NavBar;