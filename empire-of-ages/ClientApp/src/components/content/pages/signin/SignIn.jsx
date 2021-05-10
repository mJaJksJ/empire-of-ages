import React, {Component} from 'react'
import styleClasses from './SignIn.module.css'
import ReactDOM from "react-dom";
import Header from "../../../header/Header";
import { Redirect } from "react-router-dom";
import LoadingMes from "../../../../commonFuncs/LoadingMes";

class SignIn extends Component {

    constructor(props){
        super(props);

        this.state = {
            app: props.app,
            mes: ""
        }

        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onClickReset = this.onClickReset.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            app: nextProps.app
        })
    }

    onClickSubmit(e){
        this.onFormSubmit();
    }

    onClickReset(e){
        let form = ReactDOM.findDOMNode(this);
        if (form instanceof HTMLElement) {
            const child = form.getElementsByTagName('form');
            child[0].reset();
        }
    }

    onFormSubmit(e) {
        let form = ReactDOM.findDOMNode(this);
        let child;
        if (form instanceof HTMLElement) {
            child = form.getElementsByTagName('input');
        }
        let xhr = new XMLHttpRequest();
        this.setState({
            mes: "Loading..."
        });
        xhr.open("get", `/api/SignIn?login=${child[0].value}&password=${child[1].value}`, true);
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            this.state.app.setState({
                userName: data.nickname,
                isAuthorize: data.isAuthorize,
                userTeam: data.team,
                userColor: data.color,
            });
            this.setState({ mes: data.errMes });
        }.bind(this);
        xhr.send();
    }

    render() {
        if (!this.state.app.state.isAuthorize) {
            return (
                <div className={styleClasses.SignIn}>
                    <h2>Sign in form</h2>
                    <div className={styleClasses.SignInForm}>
                        <form className={styleClasses.form}>
                            <p>
                                <input required type="text" name="login" maxLength={20} placeholder={'login/email'} />
                            </p>
                            <p>
                                <input required type="password" name="password" placeholder={'password'} />
                            </p>
                        </form>
                        <div>
                            <div className={styleClasses.button} onClick={this.onClickSubmit}>Sign in</div>
                            <div className={styleClasses.button} onClick={this.onClickReset}>Reset</div>
                        </div>
                        {LoadingMes(this.state.mes, "red")}

                    </div>

                </div>
            );
        }
        else {
            return <Redirect to="/" />;
        }
    }

}

export default SignIn;