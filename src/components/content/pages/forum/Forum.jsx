import React from 'react'

import styleClasses from './Forum.module.css'

const Forum = function() {
    return (
        <div>
            <div className={styleClasses.forum}>
                There will be "Forum"
            </div>
            <div className={styleClasses.gear}>
                <img src={'images/gear.png'} alt={'work in progress'} />
            </div>


        </div>
    );
}

export default Forum;