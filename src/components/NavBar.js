import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

function NavBar(){

    return(
        <header style={styles.container}>
            <img style={styles.imageLogo} src={logo} alt="logo" />
            <h1>Azari Ecommerce</h1>
            <nav style={styles.navStyle}>
                <Link to="/category/jewelery"><p style={styles.navStyleItem} >jewelery</p></Link>
                <Link to="/category/electronics"><p style={styles.navStyleItem} >electronics</p></Link>
                
                <a style={styles.navStyleItem} href="#/">Categorias</a>
                <a style={styles.navStyleItem} href="#/">Contactanos</a>
                <a style={styles.navStyleItem} href="#/">Ayuda</a>
            </nav>
            <CartWidget />
        </header>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    navStyle: {
        display: "flex",
        justifyContent: "space-evenly"
    },
    imageLogo: {        
        height: 70
    },
    navStyleItem: {
        margin: 10
    }
}

export default NavBar;

