import React from 'react'
import styleClasses from './NavMenu.module.css'
import {NavLink} from "react-router-dom";

const NavMenu = function (props) {
    return (
        <header className={styleClasses.navMenu}>
            <ul>
                <li><NavLink to='/Main' activeClassName={styleClasses.active}>Main</NavLink></li>
                <li>
                    <NavLink to='/Nations' activeClassName={styleClasses.active}>Nations</NavLink>
                    {SubNations(props.nations)}
                </li>
                <li><NavLink to='/Classes' activeClassName={styleClasses.active}>Classes</NavLink></li>
                <li><NavLink to='/Forum' activeClassName={styleClasses.active}>Forum</NavLink></li>
            </ul>
        </header>
    );
}

const SubNations = function (nations){
    const lst = [];
    for (let nat in nations) {
        lst.push(<li key={`SubNations${nat}` }><NavLink to={`/Nations/${nat}`} activeClassName={styleClasses.active}>{nat}</NavLink></li>);
    }
    return <ul>{lst}</ul>;
}

export default NavMenu;