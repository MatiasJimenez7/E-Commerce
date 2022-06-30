import { useState } from "react";
import { createContext, useContext} from "react";

export const CartContext = createContext() // Creando contexto

export const useCart = () => useContext(CartContext) // Declarando Contexto

const CartProvider = (props) => {

    const [cartBalls, setCartBalls] = useState([])

    const [count, setCount] = useState(false)


    return (
        <CartContext.Provider value={{cartBalls, setCartBalls, count, setCount}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;