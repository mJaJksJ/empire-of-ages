import React, {Component} from 'react'

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content"
import styleClasses from './App.module.css'
import NavMenu from "./components/navMenu/NavMenu";
import {BrowserRouter} from "react-router-dom";
import nations from "./states/Nations";
import news from "./states/News"

class App extends Component{



    constructor(props) {
        super(props);
        this.state = {
            isAuthorize: false,
            app: this,

            userName: "",
            userTeam: -1,
            userColor: "#FFFFFF",

            nations: [],
            news: []
        }
    }

    componentDidMount() {
        this.setState({
            nations: nations,
            news: news
        });
        const xhr = new XMLHttpRequest();
        xhr.open("get", `/api/UserStatus`, true);
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            this.state.app.setState({
                userName: data.nickname,
                isAuthorize: data.isAuthorize,
                userTeam: data.team,
                userColor: data.color,
            });
        }.bind(this);
        xhr.send();
    }

    render(props) {
        return (
            <BrowserRouter>
                <div className={styleClasses.App}>
                    <div className={styleClasses.theVoidLeft}
                         style={{
                             textAlign: "center",
                             position: "sticky",
                             top: 50,
                         }}>
                        <p><a
                            style={{
                                textDecoration: "none",
                                color: "#B3B3B3"
                            }}
                            href={'#up'}>up</a></p>
                        <p><a
                            style={{
                                textDecoration: "none",
                                color: "#B3B3B3"
                            }}
                            href={'#footer'}>down</a></p>
                    </div>
                    <div className={styleClasses.theVoidRight}/>
                    <Header
                        app={this.state.app}
                    />
                    <Footer/>
                    <NavMenu nations={this.state.nations}/>
                    <Content
                        nations={this.state.nations}
                        news={this.state.news}
                        app={this.state.app}
                    />


                </div>
            </BrowserRouter>
        );
    }
}

export default App;
