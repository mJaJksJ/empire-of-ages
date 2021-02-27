import React from 'react'
import styleClasses from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = function (props) {
    return (
        <div className={styleClasses.navbar}>
            <div>
                <h3 align='center'>{props.name}</h3>
                {ShowNations(props.nations)}
            </div>
        </div>
    );
}

export default Navbar;

const ShowNations = function (nations) {
    const lst = [];
    for (let nat in nations) {
        lst.push(<li><NavLink to={`/Nations/${nat}`}>{nat}</NavLink></li>);
    }
    return <ul>{lst}</ul>;
}