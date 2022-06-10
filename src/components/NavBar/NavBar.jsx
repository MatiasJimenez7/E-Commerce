import React from "react";
import "./NavBar.css"
import CartWidgets from "../CartWidegts";
import img from "../../img/5842fe18a6515b1e0ad75b3d.png"

function NavBar () {
    return (
        <div className="gg">
            <div className="copa"><img src={img} alt="" /></div>
            <nav className="navbar-mayor">
                <a href="#">Productos</a>
                <a href="#">Informacion</a>
                <a href="#">Nosotros</a>
            </nav>    
            <div className="carro">
                <CartWidgets/>
            </div>
        </div>    
        
        

    )
}

export default NavBar;