import React, { useState } from "react"
import "./ItemCount.css"
import { useCart } from "../../Context/Context";


export default function ItemCount ({initial, stock, nombre, precio, img}) {

    const {cartBalls,setCartBalls, setCount} = useCart()

    const [contador, setContador] = useState(initial)

    const sumar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    };

    const restar = () => {
        if(contador > initial) {
            setContador(contador - 1)
        }
        
    };
    
    
    const isInCart = (pelotaAgregada) => {
        if(cartBalls.find(elem => elem.nombre === pelotaAgregada)) {
            return true
        } else {
            return false
        }
    
    } 
    
    const nuevoItem = () => {
        setCount(true)
        if(isInCart(nombre)) {
            cartBalls.map(elem => {
                if(elem.nombre == nombre) {
                    return (
                        elem.contador = elem.contador + contador,
                        elem.precio = elem.contador * precio
                    )
                }
            })
        } else {
            setCartBalls([...cartBalls, {
                nombre: nombre,
                precio: precio * contador,
                img : img,
                contador: contador
            }])
        }
    }
    
    return(
        <div>
            <div className="botoncarrito">
                <button className="botoncarrito" onClick={sumar}>+</button>
                <span>{contador}</span>
                <button className="botoncarrito" onClick={restar}>-</button>
            </div>
            <div className="botoncarr">
                <button onClick={nuevoItem}>Add To Cart</button>
            </div>

            
        </div>

    )
    

}



