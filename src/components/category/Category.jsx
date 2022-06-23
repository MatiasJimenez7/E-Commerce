import React, {useEffect,useState} from 'react'
import { ballsReds } from '../../Pelotas'
import Item from '../CartasProductos/Item'



export default function Category() {

    const [reds,setReds] = useState([])

    useEffect(()=>{
            ballsReds().then(
                datos=>{
                    setReds(datos)
                    console.log(reds)
                }
            )
    },[ballsReds])

    return(
        <div className="gigante">
            {
                reds.map(elem=>
                
                  <Item id={elem.id} nombre={elem.nombre} precio={elem.precio} img={elem.img}/>
                )
            }
        </div>
    )
}