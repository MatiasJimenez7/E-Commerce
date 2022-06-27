import { useState } from "react";
import ItemCount from "../AgregarAlCarrito/ItemCount";
import {Link} from "react-router-dom"
import Cart from "../carro/Cart";
 

function ItemDetail ({nombre,precio,img}) {
    
    const [count, setCount] = useState(false)

    

    const onAdd = (cantidad) => {
        setCount(true)
        
        
    }
    

    return(
    <div className="mayordetail">
        <div className="holadetail">
            <img src={img} alt="image" />
            <h3>{nombre}</h3>
            <h3>${precio}</h3>
        </div>
        <div className="cajadetalle">
            <h3>{nombre}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, esse accusamus? Deleniti unde, vitae inventore quos minus ad sint porro velit, dolorum asperiores, perferendis laborum dolore tenetur. Aliquid, corporis tenetur!</p>
            <h3>Price: ${precio}</h3>
            {
                count === false
                ?( <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                
                ):(  
                <Link to="/cart">Ver Carrito</Link>
            
            )}
            
        </div>
    </div>
    )
}

export default ItemDetail;
