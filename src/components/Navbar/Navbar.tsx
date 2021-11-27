import React from "react";
import { NavLink } from "react-router-dom";
import n from './Navbar.module.css'


function Navbar(){
    return(
        <nav className={n.navbar}>
            <div className={n.item}>
                <NavLink to={"/profile"} activeClassName={n.activeLink}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to={"/dialogs"} activeClassName={n.activeLink}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <a>News</a>
            </div>
            <div className={n.item}>
                <a>Music</a>
            </div>
            <div className={n.item}>
                <NavLink to={"/users"} activeClassName={n.activeLink}>Find Users</NavLink>
            </div>
            <div className={n.item}>
                <a >Settings</a>
            </div>

        </nav>


    )
}
export default Navbar;