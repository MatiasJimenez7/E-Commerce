import React from "react";
import { Link } from "react-router-dom";

import "./Item.css"



function Item ({nombre,precio,img}) {

    

    return(
    <div className="mayor">
        <div className="hola">
            <img src={img} alt="image" />
            <h3>{nombre}</h3>
            <h3>${precio}</h3>
            <button className="botonPelota">Add to cart</button>
            <Link to="/balls/0"><button>Ver Detalle</button></Link>
        </div>
        
    </div>
    )
}

export default Item;