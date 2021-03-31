import React, {Component} from 'react'
import styleClasses from './SignIn.module.css'
import ReactDOM from "react-dom";

class SignIn extends Component {

    constructor(props){
        super(props);
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onClickReset = this.onClickReset.bind(this);
    }

    onClickSubmit(e){
        let form = ReactDOM.findDOMNode(this);
        if (form instanceof HTMLElement) {
            const child = form.getElementsByTagName('form');
            child[0].submit();
        }
    }

    onClickReset(e){
        let form = ReactDOM.findDOMNode(this);
        if (form instanceof HTMLElement) {
            const child = form.getElementsByTagName('form');
            child[0].reset();
        }
    }

    render(){
        return (
        <div className={styleClasses.SignIn}>
            <h2>Sign in form</h2>
            <div className={styleClasses.SignInForm}>
                <form method="get" action="/SignIn" className={styleClasses.form}>
                    <p>
                        <input required type="text" name="login" maxLength={20} placeholder={'login/email'}/>
                    </p>
                    <p>
                        <input required type="password" name="password" placeholder={'password'}/>
                    </p>
                </form>
                <p>
                    <div className={styleClasses.button} onClick={this.onClickSubmit}>Sign in</div>
                    <dib className={styleClasses.button} onClick={this.onClickReset}>Reset</dib>
                </p>

            </div>

        </div>
    );}

}

export default SignIn;