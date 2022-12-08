
import React from "react";
import "./style.css";
import "../CartWidget";
import CartWidget from "../CartWidget";

const Navbar = () => {
    return(
    <div className="navbar">
        <div className="navbar-menu-logo">
          <h2 className="navbar-logo">Futuro Nombre</h2>
        </div>
    
        <CartWidget />
    </div>
    )
    
}

export default Navbar;