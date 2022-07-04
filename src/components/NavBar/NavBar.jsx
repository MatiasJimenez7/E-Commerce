import React from "react";
import "./NavBar.css"
import CartWidgets from "../CartWidgets/CartWidgets";
import img from "../../img/5842fe18a6515b1e0ad75b3d.png"
import {NavLink} from "react-router-dom"



function NavBar () {
    
    return (
        <div className="gg">
            <div className="copa"><img src={img} alt="" /></div>
            <nav className="navbar-mayor">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/category">Category</NavLink>
                <NavLink to="">Information</NavLink>
            </nav>    
            <div className="carro">
                <NavLink to="/cart">
                    <CartWidgets/>
                </NavLink>
            </div>
        </div>    
        
        

    )
}

export default NavBar;