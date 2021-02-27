import React from 'react'

import styleClasses from './Main.module.css'

const Main = function () {
    return (
        <div className={styleClasses.main}>
            <div className={styleClasses.img}>
                <img
                    src={'hello.png'}
                    alt={'hello-img'}/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={styleClasses.video}>
                <video controls width="400" height="300" src="">
                    видео нет
                </video>
            </div>

        </div>
    );
}

export default Main;