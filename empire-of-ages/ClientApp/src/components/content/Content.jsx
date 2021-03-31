import React from 'react';
import styleClasses from './Content.module.css';
import Nations from "./pages/nations/Nations.jsx";
import Classes from "./pages/classes/Classes.jsx";
import {Route} from "react-router-dom"
import Forum from "./pages/forum/Forum.jsx";
import Main from "./pages/main/Main.jsx";
import SignIn from "./pages/signin/SignIn.jsx";
import LogIn from "./pages/login/LogIn.jsx";

const Content = function (props) {
    return (
        <div className={styleClasses.Content}>
            <span id={'up'}/>
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
