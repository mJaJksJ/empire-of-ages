import React from 'react'

import styleClasses from './LogIn.module.css'

const LogIn = function () {
    return (
        <div className={styleClasses.LogIn}>
            <h2>Registration form</h2>
            <form method="get" action="/LogIn">
                <p>
                    <input required type="text" name="name" maxLength={20} placeholder={'name'}
                    pattern={"^[A-Z][a-z]*"}/>
                </p>
                <p>
                    <input required type="text" name="surname" maxLength={20} placeholder={'surname'}
                    pattern={"^[A-Z][a-z]*"}/>
                </p>
                <p>
                    <input required type="date" name="birthday" placeholder={'birthday'}/>
                </p>
                <p>
                    <input required type="text" name="login" maxLength={20} placeholder={'login'}
                    pattern={"[A-Za-z0-9._-]*"}/>
                </p>
                <p>
                    <input required type="email" name="email" placeholder={'email'}
                    pattern={".*@.*\\..*"}/>
                </p>
                <p>
                    <input required type="password" name="password" placeholder={'password'}
                    pattern={"(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}"}/>
                </p>

                <p >
                    <input type="submit" value="Log in" className={styleClasses.button}/>
                    <input type="reset" value="Reset" className={styleClasses.button}/>
                </p>



            </form>

        </div>
    );
}

export default LogIn;