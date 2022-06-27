
import NavBar from "./components/NavBar/NavBar"
import ItemCount from "./components/AgregarAlCarrito/ItemCount"
import Item from "./components/CartasProductos/Item";
import ItemListContenedor from "./components/ItemList/ItemListContenedor"
import {BrowserRouter, Route, Routes} from "react-router-dom" 
import ItemDetailConteiner from "./components/ItemDetail/ItemDetailConteiner";
import Category from "./components/category/Category"
import Cart from "./components/carro/Cart"





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContenedor/>}/>
        <Route path="/balls/:itemid" element={<ItemDetailConteiner/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/cart" element={<Cart></Cart>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

