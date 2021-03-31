import React from 'react'
import styleClasses from './Content.module.css'
import {NavLink} from "react-router-dom";

const Content = function (props) {
    if (props.nation.warriors === undefined) {
        return (
            <div className={styleClasses.content}
                 style={
                     {
                         fontSize: 22,
                         textAlign: "center"
                     }
                 }>
                <p style={
                    {margin: 25}
                }>There you can see any information about nations
                    such as <em>warriors</em>, <em>builds</em> (in future) e.t.c</p>
                {NationIcons(props.nation)}
            </div>
        );
    } else {
        return (
            <div className={styleClasses.content}>
                <div>
                    {Annotation(props.nation.warriors)}
                </div>
                <div className={styleClasses.warriors}>
                    {ShowWarriors(props.nation.warriors)}
                </div>
            </div>
        );
    }

}

const ShowWarriors = function (warriors) {
    const lst = [];

    const classesLst = function (classes) {
        const lst = [];
        for (let i = 0; i < classes.length; i++) {
            lst.push(
                <div>
                    <li>
                        <em>{classes[i]}</em>
                    </li>
                </div>
            );
        }
        return <ul>{lst}</ul>
    }

    for (let i = 0; i < warriors.length; i++) {
        lst.push(
            <div id={warriors[i].name} className={styleClasses.warriorCard}>
                <div>
                    <h2 align={'center'}>{warriors[i].name}</h2>
                </div>
                <div>
                    <img src={warriors[i].picture}
                         alt={`${warriors[i].picture}`}
                    />
                </div>
                <div style={{marginLeft: 20}}>
                    <p><strong>Classes</strong></p>
                    {classesLst(warriors[i].classes)}
                    <p><strong>Speed: </strong>{warriors[i].speed}</p>
                    <p><strong>Attach: </strong>{warriors[i].attach}</p>
                    <p><strong>Attach-distance: </strong>{warriors[i]['attach-distance']}</p>
                </div>
                <br/>
            </div>
        );
    }
    return lst;
}

const Annotation = function (warriors) {
    const lst = [];
    for (let i = 0; i < warriors.length; i++) {
        lst.push(
            <li><a href={'#' + warriors[i].name}>{warriors[i].name}</a></li>
        );
    }
    return (
        <div className={styleClasses.annotation}>
            <div>
                <p><h4>Annotation</h4></p>
                <ol>{lst}</ol>
            </div>
        </div>
    );
}

const NationIcons = function (nations) {
    const lst = [];
    for (let nat in nations) {
        lst.push(<NavLink to={`/Nations/${nat}`}>
                <img src={`/images/${nat}/flag.png`} alt={`images/${nat}/Flag.png`}/>
            </NavLink>
        );
    }
    return <div>{lst}</div>;
}

export default Content

