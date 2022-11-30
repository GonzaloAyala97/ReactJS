import React from "react";
import "./style.css";


const Navbar = ({children , onClose}) => {
    return(
    <div className="navbar">
        <div className="close-button-container">
            <button onClick={onClose} className="close-button">Carrito</button>
        </div>
        {children}
    </div>
    )
    
}

export default Navbar;