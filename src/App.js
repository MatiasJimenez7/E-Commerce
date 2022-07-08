
import NavBar from "./components/NavBar/NavBar"
import ItemCount from "./components/AgregarAlCarrito/ItemCount"
import Item from "./components/CartasProductos/Item";
import ItemListContenedor from "./components/ItemList/ItemListContenedor"
import {BrowserRouter, Route, Routes} from "react-router-dom" 
import ItemDetailConteiner from "./components/ItemDetail/ItemDetailConteiner";
import Category from "./components/category/Category"
import Cart from "./components/carro/Cart"
import CartProvider from "../src/Context/Context"
import CartWidgets from "./components/CartWidgets/CartWidgets";
import Payment from "./components/Payment/Payment";





function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContenedor/>}/>
        <Route path="/balls/:itemid" element={<ItemDetailConteiner/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/cart" element={<Cart></Cart>}/>
        <Route path="/cart/payment" element={<Payment></Payment>}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

