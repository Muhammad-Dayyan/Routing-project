import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar =()=>{
    return(

       
        <div  className={styles.navbarContainer}>
         
         <h1 className="head">Ecommerce Web</h1>
        <ul>
            
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Contact'>Contact</NavLink></li>
        </ul>
        </div>
    
        
    )
}


export default Navbar