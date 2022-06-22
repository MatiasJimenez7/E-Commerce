import ItemDetail from "./ItemDetail"
import React, { useState, useEffect } from 'react';
import { getProducts } from "../../Pelotas";
import "./ItemDetail.css"
import "../AgregarAlCarrito/ItemCount"
import {NavLink, useParams} from "react-router-dom"

export default function ItemDetailConteiner () {

    const [pelota, setPelota] = useState({})

    const {itemid} = useParams();

    useEffect(()=>{
        getProducts().then(
            pelota=>{
                setPelota(pelota[itemid])
                console.log(pelota)
            }
        )

    },[pelota])



    return (
        <div>
            <ItemDetail nombre={pelota.nombre} precio={pelota.precio} img={pelota.img}/>
        </div>
    )
}    