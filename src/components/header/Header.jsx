import React from 'react'
import styleClasses from './Header.module.css'

const Header = function () {
    return (
        <header id={'header'} className={styleClasses.header}>
            <img
                src={'/images/profile.png'}
                alt={'profile'}
            style={{color: "white"}}/>
        </header>
    );
}

export default Header;