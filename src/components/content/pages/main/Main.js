import React from 'react'

import styleClasses from './Main.module.css'

const Main = function (props) {
    return (
        <div className={styleClasses.main}>
            <div className={styleClasses.img}>
                <img
                    src={'/images/EoA.png'}
                    alt={'hello-img'}/>
            </div>
            {getNew(props)}
            <div className={styleClasses.video}>
                <video controls width="400" height="300" src="">
                    видео нет
                </video>
            </div>

        </div>
    );
}

export default Main;

const getNew = function (props) {
    const lst = [];
    lst.push(<h3>{props.news[0].title}</h3>);
    const ullst =[];
    for (let i = 0; i < props.news[0].text.length; i++) {
        ullst.push(<li>{props.news[0].text[i]}</li>);
    }
    lst.push(<ul>{ullst}</ul>);
    lst.push(<div><em>{props.news[0].date}</em></div>)
    return <div className={styleClasses.news}>{lst}</div>;
}