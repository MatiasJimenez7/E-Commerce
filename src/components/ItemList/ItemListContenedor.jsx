import React, { useEffect, useState } from "react";
import Item from "../CartasProductos/Item";
import "./ItemList.css"
import { getItems,  traerPorCategoria} from "../../firebase/Firebase";
import { useParams } from "react-router-dom";



export default function ItemListContenedor ()  {

    const [pelotas, setPelotas] = useState([])

    const {categoryId} = useParams()

    
    useEffect(()=>{
        console.log(categoryId)
        if(categoryId){
            traerPorCategoria(categoryId)
            .then((res)=>{
                setPelotas(res)
                console.log(res)
            })
        }
        else {
            getItems()
            .then((res)=>{
                setPelotas(res)
                console.log(res)
            })
        }
        

    },[categoryId]);



    return (
        <div className="gigante">
            {
                pelotas?.map(elem=>
                  <Item id={elem?.id} nombre={elem?.nombre} precio={elem?.precio} img={elem?.img}/>
                )
            }
        </div>
    );
}