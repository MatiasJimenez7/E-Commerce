
import NavBar from "./components/NavBar/NavBar"
import ItemListConteiner from "./components/ItemListConteiner"
import ItemCount from "./components/AgregarAlCarrito/ItemCount"
import Item from "./components/CartasProductos/Item";
import ItemList from "./components/ItemList/ItemList";



function App() {
  return (
    <div className="App">
      <NavBar/>
      
      {/* <ItemCount stock={10} initial={1}/>  */}
      
      <ItemList/>
      
      
    </div>
  );
}

export default App;

