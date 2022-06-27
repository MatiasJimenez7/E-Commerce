import React, { useEffect, useState } from "react";
import { getProducts } from "../../Pelotas";
import Item from "../CartasProductos/Item";
import "./ItemList.css"



export default function ItemListContenedor ()  {

    const [pelotas, setPelotas] = useState([])

    
    useEffect(()=>{
        getProducts().then(
            datos=>{
                setPelotas(datos)
            }
        )

    },[pelotas])



    return (
        <div className="gigante">
            {
                pelotas.map(elem=>
                  <Item id={elem.id} nombre={elem.nombre} precio={elem.precio} img={elem.img}/>
                )
            }
        </div>
    );
}