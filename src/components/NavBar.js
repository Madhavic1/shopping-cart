import React from 'react';
import { Link } from 'react-router-dom'
import {FaCartArrowDown} from "react-icons/fa"
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><FaCartArrowDown /></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;