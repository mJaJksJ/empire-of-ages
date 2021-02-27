import React from 'react'

import Navbar from "./navbar/Navbar";
import Content from "./content/Content";
import styleClasses from './Natios.module.css'
import {BrowserRouter, Route} from "react-router-dom";

let nations = {
    "Aztec": {
        "warriors": [
            {
                "name": "Eagle",
                "picture": "https://sun9-10.userapi.com/impg/psF1SZ-eOxDI7rXbV7KAup4YyfkB5ILIfeolGQ/pQTrsgMrIPo.jpg?size=256x256&quality=96&proxy=1&sign=683f57a745f62d8cd116495ae4f12582&type=album",
                "classes": [
                    "Infantry", "Spearman"
                ],
                "speed": 2,
                "attach": 10,
                "attach-distance": 2
            },
            {
                "name": "Jaguar",
                "picture": "https://sun9-14.userapi.com/impg/HEHedvchXBobHgPkzKY8dGn1yh_DKGJveJ2G9Q/XGD_PcbS9Kc.jpg?size=256x256&quality=96&proxy=1&sign=4197aad1538b4fc0611bfa8a02a6d1cd&type=album",
                "classes": [
                    "Infantry"
                ],
                "speed": 1,
                "attach": 12,
                "attach-distance": 1
            },
            {
                "name": "Plumed",
                "picture": "https://sun9-52.userapi.com/impg/H5Xv8s5av-1zUU8MRxSqZS2abKzRQ6k3uOE_CQ/deNWOFMTHck.jpg?size=256x256&quality=96&proxy=1&sign=1854b7c4c310a5e76e84d43cb2775f4a&type=album",
                "classes": [
                    "Infantry", "Archer"
                ],
                "speed": 1,
                "attach": 7,
                "attach-distance": 6
            }
        ]
    },
    "Persian": {
        "warriors": [
            {
                "name": "Elephant",
                "picture": "https://static.wikia.nocookie.net/ageofempires/images/a/ab/WarElephantIcon-DE.png/revision/latest?cb=20191230145604",
                "classes": [
                    "Cavalry"
                ],
                "speed": 2,
                "hitpoints": 800,
                "attach": 90,
                "attach-distance": 2
            }
        ]
    }

};

const Nations = function (props) {
    const getContent = function (nation) {
        return <Content nation={nation} />;
    }
    return (
        <div className={styleClasses.nations}>
            <Navbar name={'Nations'} nations={props.nations}/>
            <Route path='/Nations/Aztec' render={() => (<Content nation={props.nations.Aztec} />)}/>
            <Route path='/Nations/Persian' render={() => (<Content nation={props.nations.Persian} />)}/>
        </div>

    );
}

export default Nations;


