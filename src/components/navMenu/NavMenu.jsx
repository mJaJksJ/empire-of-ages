import React from 'react'
import styleClasses from './NavMenu.module.css'
import {NavLink} from "react-router-dom";

const NavMenu = function () {
    return (
        <header className={styleClasses.navMenu}>
            <ul>
                <li><NavLink to='/Main' activeClassName={styleClasses.active}>Main</NavLink></li>
                <li><NavLink to='/Nations' activeClassName={styleClasses.active}>Nations</NavLink></li>
                <li><NavLink to='/Classes' activeClassName={styleClasses.active}>Classes</NavLink></li>
                <li><NavLink to='/Forum' activeClassName={styleClasses.active}>Forum</NavLink></li>
            </ul>
        </header>
    );
}

export default NavMenu;