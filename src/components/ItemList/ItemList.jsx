import React, { useEffect, useState } from "react";
import { getProducts } from "../../Pelotas";
import Item from "../CartasProductos/Item";
import "./ItemList.css"



export default function ItemList () {

    const [pelotas, setPelotas] = useState([])

    
    useEffect(()=>{
        getProducts().then(
            datos=>{
                setPelotas(datos)
                console.log(pelotas)
            }
        )

    },[pelotas])



    return (
        <div className="gigante">
            {
                pelotas.map(elem=>
                
                  <Item nombre={elem.nombre} precio={elem.precio} img={elem.img}/>
                )
            }
        </div>
    );
}