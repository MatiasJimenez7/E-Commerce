
import NavBar from "./components/NavBar/NavBar"
import ItemListConteiner from "./components/ItemListConteiner"
import ItemCount from "./components/AgregarAlCarrito/ItemCount"
import Item from "./components/CartasProductos/Item";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner Greeting="Bienvenidos"/>
      <ItemCount stock={10} initial={1}/> 
      
      
    </div>
  );
}

export default App;

