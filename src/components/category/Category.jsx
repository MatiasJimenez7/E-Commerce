import React, {useEffect,useState} from 'react'
import Item from '../CartasProductos/Item'
import { Firebase } from "../../Firebase/Firebase";



export default function Category() {

    const [reds,setReds] = useState([])

    useEffect(() => {
        Firebase.getAll('Pelotas', {
            field: "category",
            condition: "==",
            value: "red"}).then(docs => {
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
        setReds(arr);
        });
    }, []);

    return(
        <div className="gigante">
            {reds}
        </div>
    )
}