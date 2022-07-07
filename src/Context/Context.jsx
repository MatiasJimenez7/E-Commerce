import { useState } from "react";
import { createContext, useContext} from "react";

export const CartContext = createContext() // Creando contexto

export const useCart = () => useContext(CartContext) // Declarando Contexto

const CartProvider = (props) => {

    const getTotalItems = () => {
        
        return totalItems()
    }

    const [cartBalls, setCartBalls] = useState([])

    const [count, setCount] = useState(false)

    const totalItems = () => cartBalls.reduce((acum, items) => acum + items.contador, 0)
    const totalPrice = () => cartBalls.reduce((acum, items) => acum + (items.precio * items.contador), 0)

    const removeItem = (cartball) => {
        const dataFiltrada = cartBalls.filter(elem => elem !== cartball)
        setCartBalls(dataFiltrada)
    }

    const clearcarrito = () => {
        setCartBalls([])
    }

    return (
        <CartContext.Provider value={{cartBalls, clearcarrito, removeItem, setCartBalls, count, setCount, totalItems,totalPrice, getTotalItems }}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;