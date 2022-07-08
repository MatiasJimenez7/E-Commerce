import { useState } from "react";
import { createContext, useContext} from "react";
import { v4 as uuidv4 } from 'uuid';

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

    const newOrder = {
        buyer: {
            name: "Jimenez Matias",
            phone: "+54 9 3412297441",
            email: "jimenezmatias007@gmail.com"
        },
        items: [cartBalls],
        date: new Date().toString(),
        totalItems: totalItems(),
        totalPrice: totalPrice(),
        IDOrder: uuidv4(),
    }
    const [orderState, setOrderState] = useState()

    function purchaseItems() {
        
        setOrderState(newOrder)
    
    }
    return (
        <CartContext.Provider value={{cartBalls,orderState, purchaseItems, setCartBalls, count, setCount, totalItems,totalPrice, getTotalItems }}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;