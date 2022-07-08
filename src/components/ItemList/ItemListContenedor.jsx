import React, { useEffect, useState } from "react";
import Item from "../CartasProductos/Item";
import "./ItemList.css"
import { Firebase } from "../../Firebase/Firebase";



export default function ItemListContenedor ()  {

    const [pelotas, setPelotas] = useState([])

    
    useEffect(() => {
        Firebase.getAll('Pelotas').then(docs => {
            
            const arr = [];
            docs.forEach(item => {
            const data = item.data();
            
            arr.push(
                <Item
                key={item.id}
                id={item.id}
                nombre={data.nombre}
                precio={data.precio}
                img={data.img}
                />
            );
        });

        setPelotas(arr);
        });
    }, []);




    return (
        <div className="gigante">
            {pelotas}
        </div>
    );
}