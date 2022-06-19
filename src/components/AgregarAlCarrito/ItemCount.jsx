import React, { useState } from "react"
import "./ItemCount.css"



export default function ItemCount ({initial,stock}) {
    const [contador, setContador] = useState(initial)

    const sumar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    };

    const restar = () => {
        if(contador > initial) {
            setContador(contador - 1)
        }
        
    };




    return(
        <div>
            <div className="botoncarrito">
                <button className="botoncarrito" onClick={sumar}>+</button>
                <span>{contador}</span>
                <button className="botoncarrito" onClick={restar}>-</button>
            </div>
            <div className="botoncarr">
                <button>Add To Cart</button>
            </div>

            
        </div>

    )
    

}



