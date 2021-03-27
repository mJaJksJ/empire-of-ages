import React, {Component} from 'react'

import styleClasses from './LogIn.module.css'
import ReactDOM from "react-dom";

class LogIn extends Component {
    patterns = {
        name: /^[A-Z][a-z]{1,20}/,
        surname: /^[A-Z][a-z]{1,20}/,
        login: /[A-Za-z0-9._-]{4,10}/,
        email: /.*@.*\..*/,
        password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/
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
            repeatPasswordValid: false
        };
        this.updateNameMes = this.updateNameMes.bind(this);
        this.updateSurnameMes = this.updateSurnameMes.bind(this);
        this.updateLoginMes = this.updateLoginMes.bind(this);
        this.updateEmailMes = this.updateEmailMes.bind(this);
        this.updatePasswordMes = this.updatePasswordMes.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onClickReset = this.onClickReset.bind(this);
        this.updateRepeatPassword = this.updateRepeatPassword.bind(this);
        this.updateBirthday = this.updateBirthday.bind(this);
    };

    onClickSubmit(e) {
        if (this.state.nameValid && this.state.surnameValid && this.state.birthdayValid && this.state.loginValid &&
            this.state.emailValid && this.state.passwordValid && this.state.repeatPasswordValid) {
            let form = ReactDOM.findDOMNode(this);
            if (form instanceof HTMLElement) {
                const child = form.getElementsByTagName('form');
                child[0].submit();
            }
        } else {
            alert("Fill the fields correctly");
        }
    }

    onClickReset(e) {
        let form = ReactDOM.findDOMNode(this);
        if (form instanceof HTMLElement) {
            const child = form.getElementsByTagName('form');
            child[0].reset();
        }
    }

    updateNameMes(e) {
        let form = ReactDOM.findDOMNode(this);
        let child;
        if (form instanceof HTMLElement) {
            child = form.getElementsByTagName('input');
            child[0].setCustomValidity("Error");
        }
        if (e.target.value.length < 1 + 1 || e.target.value.length > 20 + 1) {
            this.setState({
                nameMes: "Name must have 2..21 syms",
                nameValid: false
            })
        } else if (!this.patterns.name.test(e.target.value)) {
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
        this.updatePasswordMes(e);
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

    updateBirthday(e) {
        let form = ReactDOM.findDOMNode(this);
        let child;
        if (form instanceof HTMLElement) {
            child = form.getElementsByTagName('input');
            child[2].setCustomValidity("Error");
        }
        if (e.target.value == null) {
            this.setState({birthdayValid: false})
        } else {
            this.setState({birthdayValid: true})
            child[2].setCustomValidity("");
        }
    }

    render() {
        return (
            <div className={styleClasses.LogIn}>
                <h2>Registration form</h2>
                <div className={styleClasses.LogInForm}>
                    <form method="get" action="/LogIn" className={styleClasses.form} id={"form"}>
                        <div>
                            <input required type="text" name="name" placeholder={'name'}
                                   onChange={this.updateNameMes}/>
                        </div>
                        <div className={styleClasses.ValidMes}>
                            {this.state.nameMes}
                        </div>
                        <div>
                            <input required type="text" name="surname" placeholder={'surname'}
                                   onChange={this.updateSurnameMes}/>
                        </div>
                        <div className={styleClasses.ValidMes}>
                            {this.state.surnameMes}
                        </div>
                        <div>
                            <input required type="date" name="birthday" placeholder={'birthday'}
                                   onChange={this.updateBirthday}/>
                        </div>
                        <div className={styleClasses.ValidMes}>
                            {this.state.birthdayMes}
                        </div>
                        <div>
                            <input required type="text" name="login" placeholder={'login'}
                                   onChange={this.updateLoginMes}/>
                        </div>
                        <div className={styleClasses.ValidMes}>
                            {this.state.loginMes}
                        </div>
                        <div>
                            <input required type="email" name="email" placeholder={'email'}
                                   onChange={this.updateEmailMes}/>
                        </div>
                        <div className={styleClasses.ValidMes}>
                            {this.state.emailMes}
                        </div>
                        <div>
                            <input required type="password" name="password" placeholder={'password'}
                                   onChange={this.updatePassword}
                            />
                        </div>
                        <div className={styleClasses.ValidMes}>
                            {this.state.passwordMes}
                        </div>
                        <div>
                            <input required type="password" name="password" placeholder={'repeat password'}
                                   onChange={this.updateRepeatPassword}/>
                        </div>
                    </form>
                    <button className={styleClasses.button} onClick={this.onClickSubmit}>Log in</button>
                    <button className={styleClasses.button} onClick={this.onClickReset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default LogIn;