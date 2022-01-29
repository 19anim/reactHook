import React, { useState } from 'react';
import PropTypes from 'prop-types';

Login.propTypes = {
    loginAccounts: PropTypes.array,
};

function Login(props) {
    const { loginAccounts } = props;
    var isAdmin = false;
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    function handleUserNameInput(e) {
        setUserName(e.target.value);
    }
    function handlePassWordInput(e) {
        setPassWord(e.target.value);
    }

    function compareAccountInfo() {
        for (const loginAccount of loginAccounts) {
            let [tempUserName, tempPassword, tempIsAdmin] = Object.values(loginAccount);
            if (userName === tempUserName)
                if (passWord === tempPassword) {
                    isAdmin = tempIsAdmin;
                    return true;
                }
                else
                    continue;
        }
        return false;
    }

    function checkIfAdmin() {
        return isAdmin ? true : false;
    }

    function handleLoginForm(e) {
        if (compareAccountInfo())
            if (checkIfAdmin())
                console.log("Login successfully as an ADMIN")
            else
                console.log("Login successfully as a NORMAL USER");
        else
            console.log("LOGIN FAIL");
        e.preventDefault();
    }

    return (
        <div className='Login' >
            <form onSubmit={handleLoginForm}>
                <div className="userName">
                    <input type="text" placeholder='User Name' onChange={handleUserNameInput} />
                </div>
                <div className="passWord">
                    <input type="password" onChange={handlePassWordInput} />
                </div>
                <div className="submitButton">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
}

export default Login;