import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"

function Item ({nombre,precio,img,id}) {

    const urlDetalle = `/balls/${id}`

    return(
      <div className="mayor">
        <Link className="link" to={urlDetalle}>
          <div className="hola">
            <img src={img} alt="image" />
            <h3>{nombre}</h3>
            <h3>${precio}</h3>
            <button className="botonPelota">Add to cart</button>
          </div>
        </Link>
      </div>
    )
}

export default Item;