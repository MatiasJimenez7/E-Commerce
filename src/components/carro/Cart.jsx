import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/Context';
import "./cart.css"
import OrderForm from "../OrderForm/OrderForm"


const Cart = () => {

    const {cartBalls,removeItem,totalItems,totalPrice,clearcarrito} = useCart()

    useEffect(()=>{
        console.log(cartBalls)
    },[cartBalls])
    return(
        <div>
            {cartBalls.length > 0 ?
            <>
            <div className='botondelcarrito'>
                <button onClick={clearcarrito}>Remove Products</button>
            </div>
            <div className="contenedor">
                
                {cartBalls.map(elem=><div  className="contenedorPelotas">
                    <div className='displayFlex'>
                        <h2>{elem.nombre}</h2>
                        <h2>|</h2>
                        <h2>$ {elem.precio}</h2>
                    </div>
                    
                    <h2>Cantidades: {elem.contador} Balls</h2>
                    <div onClick={()=>{removeItem(elem)}} className="svgclear">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M10 10l4 4m0 -4l-4 4" />
                        </svg>
                    </div>
                </div>)}
                
            </div>
            <h2 className='eltotal'>Subtotal: ${totalPrice()} ({totalItems()} unidades)</h2>
            <div className="campo">Ingrese sus datos para proceder al pago.</div>
            <div  className="contenedor-pagar-vaciar">
                <OrderForm/>
            </div>
            
            
            </>
            : 
                <>
                    <Link className='botondelcarrito2' to="/">
                        <button>Return to the store</button>
                    </Link> 
                </> 
            } 
        </div>
    )
}
export default Cart;