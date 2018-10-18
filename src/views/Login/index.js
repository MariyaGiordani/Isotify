import React from 'react';
import './index.css';

const Login = () => (
    <div className="content-login">
        <div className="content-login__container-title">
            <h1 className="container-title__phrase">Login</h1>
            <button className="container-title__button">Login with Spotify</button>
        </div>
        <a className="content-login__first-link" href="#">Remember Password?</a>
        <div className="content-login__container-text">
            <a href="#" className="content-login__second-link">didn’t do this YET?</a>
            <a href="#" className="content-login__third-link">Sign up</a>
        </div>
    </div>
);

export default Login;