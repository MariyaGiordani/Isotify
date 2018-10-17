import React from 'react';
import './index.css';

const Login = () => (
    <div className="content-login">
        <div className="content-login__title">
            <h1 className="login__title" >Login</h1>
            <button className="login__button">Login with Spotify</button>
        </div>
        <p className="first-paragraph">Remember Password?</p>
        <div className="content-login__text">
            <p className="second-paragraph">didn’t do this YET?</p>
            <a href="#" className="link">Sign up</a>
        </div>
    </div>
);

export default Login;