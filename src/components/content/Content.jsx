import React from 'react';

import styleClasses from './Content.module.css';
import Nations from "./pages/nations/Nations";
import Classes from "./pages/classes/Classes";
import {Route} from "react-router-dom"
import Forum from "./pages/forum/Forum";
import Main from "./pages/main/Main";

const Content = function (props) {
    return (

        <div className={styleClasses.Content}>
            <Route path={'/Main'} component={Main}/>

            <Route path={'/Nations'} render={() => (<Nations nations={props.nations} />)}/>
            <Route path={'/Classes'} component={Classes}/>
            <Route path={'/Forum'} component={Forum}/>
        </div>
    );
}

export default Content

///<Route path={'/Nations'} component={Nations}/>