import React from 'react'

import Navbar from "./navbar/Navbar";
import Content from "./content/Content";
import styleClasses from './Natios.module.css'
import {Route} from "react-router-dom";

const Nations = function (props) {
    return (
        <div className={styleClasses.nations}>
            <Navbar name={'Nations'} nations={props.nations}/>
            <Route exact path='/Nations' render={() => (<Content nation={props.nations}/>)}/>
            <Route path='/Nations/Aztec' render={() => (<Content nation={props.nations.Aztec} />)}/>
            <Route path='/Nations/Persian' render={() => (<Content nation={props.nations.Persian} />)}/>
            <Route path='/Nations/Hun' render={() => (<Content nation={props.nations.Hun} />)}/>
            <Route path='/Nations/Mongol' render={() => (<Content nation={props.nations.Mongol} />)}/>
            <Route path='/Nations/Roman' render={() => (<Content nation={props.nations.Roman} />)}/>
        </div>

    );
}

export default Nations;


