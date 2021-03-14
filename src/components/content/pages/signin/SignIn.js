import React from 'react'
import styleClasses from './SignIn.module.css'

const SignIn = function () {
    return (
        <div className={styleClasses.SignIn}>
            <h2>Sign in form</h2>
            <form method="get" action="/SignIn">
                <p>
                    <input required type="text" name="login" maxLength={20} placeholder={'login'}/>
                </p>
                <p>
                    <input required type="password" name="password" placeholder={'password'}/>
                </p>
                <p >
                    <input type="submit" value="Sign in" className={styleClasses.button}/>
                    <input type="reset" value="Reset" className={styleClasses.button}/>
                </p>



            </form>

        </div>
    );
}

export default SignIn;