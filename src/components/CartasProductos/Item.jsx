import React from "react";
import "./Item.css"

function Item ({nombre,precio,img}) {

    return(
    <div className="mayor">
        <div className="hola">
            <img src={img} alt="image" />
            <h3>{nombre}</h3>
            <h3>${precio}</h3>
        </div>
    </div>
    )
}

export default Item;