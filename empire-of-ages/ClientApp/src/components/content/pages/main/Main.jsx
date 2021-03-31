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
    for(let k = 0; k < props.news.length; k++){
        const ullst =[];
        for (let i = 0; i < props.news[k].text.length; i++) {
            ullst.push(<li>{props.news[k].text[i]}</li>);
        }
        lst.push(
            <div>
                <h3>{props.news[k].title}</h3>
                <ul>{ullst}</ul>
                <div><em>{props.news[k].date}</em></div>
            </div>

        );
    }
    return <div className={styleClasses.news}>{lst}</div>;
}