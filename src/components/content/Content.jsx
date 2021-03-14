import React from 'react';

import styleClasses from './Content.module.css';
import Nations from "./pages/nations/Nations";
import Classes from "./pages/classes/Classes";
import {Route} from "react-router-dom"
import Forum from "./pages/forum/Forum";
import Main from "./pages/main/Main";
import SignIn from "./pages/signin/SignIn";
import LogIn from "./pages/login/LogIn";

const Content = function (props) {
    return (
        <div className={styleClasses.Content}>
            <span id={'up'}></span>
            <Route path={'/Main'} render={() => (<Main news={props.news}/>) }/>
            <Route path={'/Nations'} render={() => (<Nations nations={props.nations} />)}/>
            <Route path={'/Classes'} component={Classes}/>
            <Route path={'/Forum'} component={Forum}/>
            <Route path={'/SignIn'} component={SignIn}/>
            <Route path={'/LogIn'} component={LogIn}/>
        </div>
    );
}

export default Content

///<Route path={'/Nations'} component={Nations}/>