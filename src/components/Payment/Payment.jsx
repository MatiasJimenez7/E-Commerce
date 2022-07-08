import React from "react";
import {Link} from "react-router-dom"
import {useCart} from "../../Context/Context"
import "../Payment/Payment.css"

function Payment() {

    const {orderState, clearcarrito} = useCart()

    return(
        <div className="payment">
            <div className="contenedor-payment">
                <div className="pago-realizado">Pago realizado con éxito. ¡Gracias por su compra!</div>
                <div className="id-fecha">ID de la orden: {orderState.IDOrder}</div>
                <div className="id-fecha">Fecha: {orderState.date}</div>
                <div className="detalle">Detalle de la orden</div>
                <div>
                    {orderState.items[0].map(elem => 
                        <>
                            <div className="hijos-detalle-orden">
                            {elem.nombre} - ${elem.precio} | {elem.contador} Unidades
                            </div>
                        </>
                    )}
                </div>
                <div className="hijos-detalle-orden subtotal">Subtotal: ${orderState.totalPrice} | {orderState.totalItems} Unidades</div>

                <div className="detalle">Información del comprador</div>
                <div className="comprador">{orderState.buyer.name}</div>
                <div className="comprador">{orderState.buyer.phone}</div>
                <div className="comprador">{orderState.buyer.email}</div>  
            </div>
            <Link to="/">
                        <button onClick={clearcarrito} className="volver-tienda margin-top">Volver a la tienda</button>
            </Link>
        </div>
    )
}

export default Payment