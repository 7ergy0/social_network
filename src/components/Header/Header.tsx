import React from "react";
import {NavLink} from "react-router-dom";
import n from './Header.module.css'


function Header(props: any) {
    return (
        <header className={n.header}>
            <img src="https://sweetcrudereports.com/wp-content/uploads/2018/07/Total-1-e1531433364798.jpg"/>

            <div className={n.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header