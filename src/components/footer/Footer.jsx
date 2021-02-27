import React from 'react'
import styleClasses from './Footer.module.css'

const Header = function () {
    return (
        <header id={'footer'} className={styleClasses.footer}>
            <hr/>
            <a href={'#'}>designed by mJaJksJ</a>
        </header>
    );
}

export default Header;