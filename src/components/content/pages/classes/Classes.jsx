import React from 'react'
import styleClasses from './Classes.module.css'

const Classes = function () {
    return (
        <div>
            <div className={styleClasses.classes}>
                There will be "Classes guide"
            </div>
            <div className={styleClasses.gear}>
                <img src={'images/gear.png'} alt={'work in progress'} />
            </div>


        </div>
    );
}

export default Classes;