import React from 'react'
import styleClasses from './Content.module.css'

const Content = function (props) {
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

export default Content

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
                         alt={`${warriors[i].name} picture`}
                    />
                </div>
                <div>
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
    let ret = (
        <div className={styleClasses.annotation}>
            <p><h4>Annotation</h4></p>
            <ol>{lst}</ol>
        </div>
    )
    return ret;
}