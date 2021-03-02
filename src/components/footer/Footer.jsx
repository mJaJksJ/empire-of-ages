import React from 'react'
import styleClasses from './Footer.module.css'

const Footer = function () {
    return (
        <footer id={'footer'} className={styleClasses.footer}>
            <hr/>
            <a href={'https://github.com/mJaJksJ'}>designed by mJaJksJ</a>
        </footer>
    );
}

export default Footer;