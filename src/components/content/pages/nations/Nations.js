import React from 'react'

import Navbar from "./navbar/Navbar";
import Content from "./content/Content";
import styleClasses from './Natios.module.css'
import {Route} from "react-router-dom";

const Nations = function (props) {
    return (
        <div className={styleClasses.nations}>
            <Navbar name={'Nations'} nations={props.nations}/>
            <Route path='/Nations' render={() => (<Content nation={props.nations}/>)}/>
            <Route path='/Nations/Aztec' render={() => (<Content nation={props.nations.Aztec} />)}/>
            <Route path='/Nations/Persian' render={() => (<Content nation={props.nations.Persian} />)}/>
        </div>

    );
}

export default Nations;


