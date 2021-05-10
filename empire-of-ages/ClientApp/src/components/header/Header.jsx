import React, {Component} from 'react'
import styleClasses from './Header.module.css'
import {NavLink} from "react-router-dom";
import ReactDOM from "react-dom";
import LoadingMes from "../../commonFuncs/LoadingMes";

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            app: props.app,
            isAuthorize: props.app.state.isAuthorize,
            userName: props.app.state.userName,
            userColor: props.app.state.userColor,
            mes: ""
        };

        this.WololoUpdateTeam = this.WololoUpdateTeam.bind(this);
        this.WololoGetTeam = this.WololoGetTeam.bind(this);
        this.WololoTeamApi = this.WololoTeamApi.bind(this);

        this.AuthorizeDependence = this.AuthorizeDependence.bind(this);

        this.LogOut = this.LogOut.bind(this);
    }

    componentDidMount(props) {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            app: nextProps.app,
            isAuthorize: nextProps.app.state.isAuthorize,
            userName: nextProps.app.state.userName,
            userColor: nextProps.app.state.userColor
        });
        this.WololoGetTeam();
    }

    WololoTeamApi(method) {
        if (this.state.isAuthorize) {
            const xhr = new XMLHttpRequest();
            xhr.open(method, `/api/UserTeam?login=Frog`, true);
            xhr.onload = function () {
                let data = JSON.parse(xhr.responseText);
                this.setState({
                    userColor: data.color,
                    mes: data.errMes
                })
            }.bind(this);
            xhr.send();
        }
    }

    WololoUpdateTeam(e) {
        this.setState({
            mes: "wo-lo-looo..."
        })
        this.WololoTeamApi("put");
    }

    WololoGetTeam(e) {
        if (this.state.isAuthorize) {
            const xhr = new XMLHttpRequest();
            xhr.open("get", `/api/UserTeam?login=Frog`, true);
            xhr.onload = function () {
                let data = JSON.parse(xhr.responseText);
                this.setState({
                    userColor: data.color
                });
                this.WololoFetTeam(e);
            }.bind(this);
            xhr.send();
        }
    }

    LogOut(e) {
        this.state.app.setState({
            userName: "",
            isAuthorize: false,
            userTeam: -1,
            userColor: "#FFFFFF",
        })
    }

    AuthorizeDependence(e) {
        if (!this.state.isAuthorize) {
            return (
                <div>
                    {LoadingMes(this.state.mes, "red")}
                    <span className={styleClasses.button}><NavLink to='/LogIn'>Log in </NavLink></span>
                    <span className={styleClasses.button}><NavLink to='/SignIn'>Sign in </NavLink></span>
                </div>
            );
        } else {
            return (
                <div>
                    {LoadingMes(this.state.mes, "red")}
                    <span className={styleClasses.button} style={{color: this.state.userColor, cursor: "pointer"}}
                        onClick={this.WololoUpdateTeam}>{this.state.userName}</span>
                    <span className={styleClasses.button}><NavLink to='/SignIn' onClick={this.LogOut} > Log out</NavLink></span>
                </div>
            );
        }
    }

    render() {
        return (
            <header id={'header'} className={styleClasses.header}>            
                {this.AuthorizeDependence()}
            </header>
        );
    }
}

export default Header;
