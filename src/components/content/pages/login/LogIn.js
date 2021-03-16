import React, {Component} from 'react'

import styleClasses from './LogIn.module.css'

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
        this.state = {password: "", nameMes: ".", surnameMes: ".", loginMes: ".", emailMes: ".", passwordMes: "."};
        this.updateNameMes = this.updateNameMes.bind(this);
        this.updateSurnameMes = this.updateSurnameMes.bind(this);
        this.updateLoginMes = this.updateLoginMes.bind(this);
        this.updateEmailMes = this.updateEmailMes.bind(this);
        this.updatePasswordMes = this.updatePasswordMes.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    };

    updateNameMes(e) {
        if (e.target.value.length < 1 + 1 || e.target.value.length > 20 + 1) {
            this.setState({nameMes: "Name must have "})
        } else if (!this.patterns.name.test(e.target.value)) {
            this.setState({nameMes: "Name must begin with upper and other must be lower, only letters"})
        } else {
            this.setState({nameMes: "."})
        }
    };

    updateSurnameMes(e) {
        if (e.target.value.length < 1 + 1 || e.target.value.length > 20 + 1) {
            this.setState({surnameMes: "Surname must have 2..21 syms"})
        } else if (!this.patterns.surname.test(e.target.value)) {
            this.setState({surnameMes: "Surname must have 2..21 syms"})
        } else {
            this.setState({surnameMes: "."})
        }
    };

    updateLoginMes(e) {
        if (e.target.value.length < 1 + 1 || e.target.value.length > 20 + 1) {
            this.setState({loginMes: "Login must have 4..10 syms"})
        } else if (!this.patterns.login.test(e.target.value)) {
            this.setState({loginMes: "Login must have letters, nums, dot and underscore"})
        } else {
            this.setState({loginMes: "."})
        }
    };

    updateEmailMes(e) {
        if (!this.patterns.email.test(e.target.value)) {
            this.setState({emailMes: "Email has name and domain name"})
        } else {
            this.setState({emailMes: "."})
        }
    };

    updatePasswordMes(e) {
        if (!this.patterns.password.test(e.target.value)) {
            this.setState({passwordMes: "Password must have Upper letter, lower letter, nums and their more 8"})
        } else {
            this.setState({passwordMes: "."})
        }
    };

    updatePassword(e) {
        this.updatePasswordMes(e);
        this.setState({password: e.target.value});
    };

    render() {
        return (
            <div className={styleClasses.LogIn}>
                <h2>Registration form</h2>
                <form method="get" action="/LogIn">
                    <div>
                        <input required type="text" name="name" placeholder={'name'}
                               pattern={this.patterns.name.source} onChange={this.updateNameMes}/>
                    </div>
                    <div className={styleClasses.ValidMes}>
                        {this.state.nameMes}
                    </div>
                    <div>
                        <input required type="text" name="surname" placeholder={'surname'}
                               pattern={this.patterns.surname.source} onChange={this.updateSurnameMes}/>
                    </div>
                    <div className={styleClasses.ValidMes}>
                        {this.state.surnameMes}
                    </div>
                    <div>
                        <input required type="date" name="birthday" placeholder={'birthday'}
                               max={`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`}/>
                    </div>
                    <div className={styleClasses.ValidMes}>
                        .
                    </div>
                    <div>
                        <input required type="text" name="login" placeholder={'login'}
                               pattern={this.patterns.login.source} onChange={this.updateLoginMes}/>
                    </div>
                    <div className={styleClasses.ValidMes}>
                        {this.state.loginMes}
                    </div>
                    <div>
                        <input required type="email" name="email" placeholder={'email'}
                               pattern={this.patterns.email.source} onChange={this.updateEmailMes}/>
                    </div>
                    <div className={styleClasses.ValidMes}>
                        {this.state.emailMes}
                    </div>
                    <div>
                        <input required type="password" name="password" placeholder={'password'}
                               pattern={this.patterns.password.source} onChange={this.updatePassword}
                        />
                    </div>
                    <div className={styleClasses.ValidMes}>
                        {this.state.passwordMes}
                    </div>
                    <div>
                        <input required type="password" name="password" placeholder={'repeat password'}
                               pattern={this.state.password}/>

                    </div>

                    <p>
                        <input type="submit" value="Log in" className={styleClasses.button}/>
                        <input type="reset" value="Reset" className={styleClasses.button}/>
                    </p>

                </form>

            </div>
        )
    }
}

export default LogIn;