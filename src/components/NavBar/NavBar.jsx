import "./NavBar.css"
import CartWidgets from "../CartWidegts";


function NavBar () {
    return (
        <nav className="navbar-mayor">
            <a href="#">Informacion</a>
            <a href="#">Clientes</a>
            <a href="#">Nosotros</a>
            <CartWidgets/>
        </nav>

    )
}

export default NavBar;