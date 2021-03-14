import React from 'react'
import styleClasses from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = function () {
    return (
        <header id={'header'} className={styleClasses.header}>
            <div>
                <span className={styleClasses.button}><NavLink to='/LogIn'>Log in </NavLink></span>
                <span className={styleClasses.button}><NavLink to='/SignIn'>Sign in </NavLink></span>
                {/*<img
                    src={'/images/profile.png'}
                    alt={'profile'}
                    style={{color: "white"}}/>*/}
            </div>

        </header>
    );
}

export default Header;