import React from 'react'

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content"
import styleClasses from './App.module.css'
import NavMenu from "./components/navMenu/NavMenu";
import {BrowserRouter} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className={styleClasses.App}>
                <div className={styleClasses.theVoidLeft}
                     style={{
                         textAlign: "center",
                         position: "sticky",
                         top: 100
                     }}>
                    <p><a href={'#header'}>up</a></p>
                    <p><a href={'#footer'}>down</a></p>
                </div>
                <div className={styleClasses.theVoidLeft}>

                </div>
                <Header/>
                <Footer/>
                <NavMenu/>
                <Content nations={props.nations}/>


            </div>
        </BrowserRouter>
    );
}

export default App;
