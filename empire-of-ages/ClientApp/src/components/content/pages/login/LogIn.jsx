import React, {Component} from 'react'
import styleClasses from './LogIn.module.css'
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
import LoadingMes from "../../../../commonFuncs/LoadingMes";
import Encript from "../../../../commonFuncs/Encript";

class LogIn extends Component {
    patterns = {
        name: /^[A-Z][a-z]{1,20}$/,
        surname: /^[A-Z][a-z]{1,20}$/,
        login: /^[A-Za-z0-9._-]{4,10}$/,
        email: /^.*@.*\...+$/,
        password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])^[0-9a-zA-Z]{8,}$/
    }

    constructor(props) {
        super(props);

        this.state = {
            password: "",
            nameMes: ".",
            surnameMes: ".",
            birthdayMes: ".",
            loginMes: ".",
            emailMes: ".",
            passwordMes: ".",
            nameValid: false,
            surnameValid: false,
            birthdayValid: false,
            loginValid: false,
            emailValid: false,
            passwordValid: false,
            repeatPasswordValid: false,
            app: props.app,
            mes: ""
        };

        this.updateNameMes = this.updateNameMes.bind(this);
        this.updateSurnameMes = this.updateSurnameMes.bind(this);
        this.updateBirthdayMes = this.updateBirthdayMes.bind(this);
        this.updateLoginMes = this.updateLoginMes.bind(this);
        this.updateEmailMes = this.updateEmailMes.bind(this);
        this.updatePasswordMes = this.updatePasswordMes.bind(this);

        this.updatePassword = this.updatePassword.bind(this);
        this.updateRepeatPassword = this.updateRepeatPassword.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onClickReset = this.onClickReset.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    updateNameMes(e) {
        let form = ReactDOM.findDOMNode(this);
        let child;
        if (form instanceof HTMLElement) {
            child = form.getElementsByTagName('input');
            child[0].setCustomValidity("Error");
        }
        if(e.target.value.length >= 2){
          e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1, e.target.value.length);
        }
        if (e.target.value.length < 1 + 1 || e.target.value.length > 20 + 1) {
            this.setState({
                nameMes: "Name must have 2..21 syms",
                nameValid: false
            })
        } else if (!this.patterns.name.test(e.target.value) ) {
            this.setState({
                nameMes: "Name must begin with upper and other must be lower, only letters",
                nameValid: false
            })
        } else {
            this.setState({nameMes: ".", nameValid: true});
            child[0].setCustomValidity("");
        }
    };

    updateSurnameMes(e) {
        let form = ReactDOM.findDOMNode(this);
        let child;
        if (form instanceof HTMLElement) {
            child = form.getElementsByTagName('input');
            child[1].setCustomValidity("Error");
        }
        if(e.target.value.length >= 2){
          e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1, e.target.value.length);
        }
        if (e.target.value.length < 1 + 1 || e.target.value.length > 20 + 1) {
            this.setState({
                surnameMes: "Surname must have 2..21 syms",
                surnameValid: false
            })
        } else if (!this.patterns.surname.test(e.target.value)) {
            this.setState({
                surnameMes: "Surname must begin with upper and other must be lower, only letters",
                surnameValid: false
            })
        } else {
            this.setState({surnameMes: ".", surnameValid: true});
            child[1].setCustomValidity("");
        }
    };

    updateBirthdayMes(e) {
        let form = ReactDOM.findDOMNode(this);
        let child;
        if (form instanceof HTMLElement) {
            child = form.getElementsByTagName('input');
            child[2].setCustomValidity("Error");
        }
        if (e.target.value == null || !(Date.parse(new Date()+"") > Date.parse(e.target.value))) {
            this.setState({birthdayValid: false, birthdayMes: "Not earlier than now"})
        } else {
            this.setState({birthdayValid: true, birthdayMes: "."})
            child[2].setCustomValidity("");
        }
    };

    updateLoginMes(e) {
        let form = ReactDOM.findDOMNode(this);
        let child;
        if (form instanceof HTMLElement) {
            child = form.getElementsByTagName('input');
            child[3].setCustomValidity("Error");
        }
        if (e.target.value.length < 4 || e.target.value.length > 10) {
            this.setState({
                loginMes: "Login must have 4..10 syms",
                loginValid: false
            })
        } else if (!this.patterns.login.test(e.target.value)) {
            this.setState({
                loginMes: "Login must have letters, nums, dot and underscore",
                loginValid: false
            })
        } else {
            this.setState({loginMes: ".", loginValid: true});
            child[3].setCustomValidity("");
        }
    };

    updateEmailMes(e) {
        let form = ReactDOM.findDOMNode(this);
        let child;
        if (form instanceof HTMLElement) {
            child = form.getElementsByTagName('input');
            child[4].setCustomValidity("Error");
        }
        if (!this.patterns.email.test(e.target.value)) {
            this.setState({
                emailMes: "Email has name and domain name",
                emailValid: false
            })
        } else {
            this.setState({emailMes: ".", emailValid: true});
            child[4].setCustomValidity("");
        }
    };

    updatePasswordMes(e) {
        this.updatePassword(e);
        let form = ReactDOM.findDOMNode(this);
        let child;
        if (form instanceof HTMLElement) {
            child = form.getElementsByTagName('input');
            child[5].setCustomValidity("Error");
        }
        if (!this.patterns.password.test(e.target.value)) {
            this.setState({
                passwordMes: "Password must have Upper letter, lower letter, nums and their more 8",
                passwordValid: false
            })
        } else {
            this.setState({passwordMes: ".", passwordValid: true});
            child[5].setCustomValidity("");
        }
    };

    updatePassword(e) {
        this.setState({password: e.target.value});
    };

    updateRepeatPassword(e) {
        let form = ReactDOM.findDOMNode(this);
        let child;
        if (form instanceof HTMLElement) {
            child = form.getElementsByTagName('input');
            child[6].setCustomValidity("Error");
        }
        if (this.state.password === e.target.value) {
            this.setState({repeatPasswordValid: true});
            child[6].setCustomValidity("");
        } else {
            this.setState({repeatPasswordValid: false})
        }

    }

    onClickSubmit(e) {
        if (this.state.nameValid && this.state.surnameValid && this.state.birthdayValid && this.state.loginValid &&
            this.state.emailValid && this.state.passwordValid && this.state.repeatPasswordValid) {
            this.onFormSubmit(e);
        } else {
            this.setState({ mes: "Fill the fields correctly"})
        }
    }

    onClickReset(e) {
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
        this.setState({ mes: "creating..." });

        /*const data = new FormData();
        data.append("name", child[0].value);
        data.append("surname", child[1].value);
        data.append("birthday", child[2].value);
        data.append("nickname", child[3].value);
        data.append("email", child[4].value);
        data.append("password", child[5].value);
        data.append("team", "1");*/
        let data = JSON.stringify({
            name: child[0].value,
            surname: child[1].value,
            birthday: child[2].value,
            nickname: child[3].value,
            email: child[4].value,
            password: Encript(child[5].value),
            team: "1"
        })
        
        let xhr = new XMLHttpRequest();

        xhr.open("post", "/api/LogIn", true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            let response = JSON.parse(xhr.responseText);
            this.state.app.setState({
                userName: response.nickname,
                isAuthorize: response.isAuthorize,
                userTeam: response.team,
                userColor: response.color,
            });
            this.setState({ mes: response.errMes });
        }.bind(this);
        xhr.send(data);

    }

    render() {
        if (!this.state.app.state.isAuthorize) {
            return (
                <div className={styleClasses.LogIn}>
                    <h2>Registration form</h2>
                    <div className={styleClasses.LogInForm}>
                        <form className={styleClasses.form}>
                            <div>
                                <input required type="text" name="name" placeholder={'name'}
                                    onChange={this.updateNameMes} />
                            </div>
                            <div className={styleClasses.ValidMes}>
                                {this.state.nameMes}
                            </div>
                            <div>
                                <input required type="text" name="surname" placeholder={'surname'}
                                    onChange={this.updateSurnameMes} />
                            </div>
                            <div className={styleClasses.ValidMes}>
                                {this.state.surnameMes}
                            </div>
                            <div>
                                <input required type="date" name="birthday" placeholder={'birthday'}
                                    onChange={this.updateBirthdayMes} />
                            </div>
                            <div className={styleClasses.ValidMes}>
                                {this.state.birthdayMes}
                            </div>
                            <div>
                                <input required type="text" name="login" placeholder={'login'}
                                    onChange={this.updateLoginMes} />
                            </div>
                            <div className={styleClasses.ValidMes}>
                                {this.state.loginMes}
                            </div>
                            <div>
                                <input required type="email" name="email" placeholder={'email'}
                                    onChange={this.updateEmailMes} />
                            </div>
                            <div className={styleClasses.ValidMes}>
                                {this.state.emailMes}
                            </div>
                            <div>
                                <input required type="password" name="password" placeholder={'password'}
                                    onChange={this.updatePasswordMes}
                                />
                            </div>
                            <div className={styleClasses.ValidMes}>
                                {this.state.passwordMes}
                            </div>
                            <div>
                                <input required type="password" name="password" placeholder={'repeat password'}
                                    onChange={this.updateRepeatPassword} />
                            </div>
                            <div className={styleClasses.ValidMes}>
                                {"."}
                            </div>
                        </form>
                        <div>
                            <div className={styleClasses.button} onClick={this.onClickSubmit}>Log in</div>
                            <div className={styleClasses.button} onClick={this.onClickReset}>Reset</div>
                        </div>
                        {LoadingMes(this.state.mes, "red")}
                    </div>
                </div>
            )
        }
        else {
            return <Redirect to="/" />;
        }
    }
}

export default LogIn;