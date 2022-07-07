import ItemDetail from "./ItemDetail"
import React, { useState, useEffect } from 'react';
import "./ItemDetail.css"
import "../AgregarAlCarrito/ItemCount"
import {NavLink, useParams} from "react-router-dom"
import {traerUnProducto} from "../../firebase/Firebase";


export default function ItemDetailConteiner () {

    const [pelota, setPelota] = useState({})

    const {itemId} = useParams();

    useEffect(()=>{
        traerUnProducto(itemId)
        .then((res)=>{
            setPelota(res)
        })

    },[itemId])



    return (
        <div>
            <ItemDetail nombre={pelota.nombre} precio={pelota.precio} img={pelota.img}/>
        </div>
    )
}    