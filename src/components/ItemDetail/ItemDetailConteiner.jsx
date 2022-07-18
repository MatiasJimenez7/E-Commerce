import ItemDetail from "./ItemDetail"
import React, { useState, useEffect } from 'react';
import "./ItemDetail.css"
import "../AgregarAlCarrito/ItemCount"
import {useParams} from "react-router-dom"
import { Firebase } from '../../Firebase/Firebase';



export default function ItemDetailConteiner () {

    const [pelota, setPelota] = useState([])

    const {itemid} = useParams();
    

    useEffect(()=>{
        Firebase.get(`Pelotas/${itemid}`).then(res => {
        const itemsFirebase = res.data()
        
        setPelota(<ItemDetail id={itemsFirebase.id}
            nombre={itemsFirebase.nombre}
            precio={itemsFirebase.precio}
            img={itemsFirebase.img}
        />)})},[])
    
    return (
        <div>
            {pelota}
        </div>
    )
}    