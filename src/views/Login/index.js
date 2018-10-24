import React from 'react';
import { Link } from 'react-router-dom';
import { getClientInfo } from '../../utils/spotify/getClientInfo';
import './index.css';

const Login = () => (
    <div className="content-background">
        <div className="content-login">
            <div className="content-login__container-title">
                <h1 className="container-title__phrase">Login</h1>
                <button className="container-title__button" id="login" onClick={getClientInfo}>
                    Login with Spotify
                </button>
            </div>
            <Link className="content-login__first-link" to="/">Remember Password?</Link>
            <div className="content-login__container-text">
                <Link className="content-login__second-link" to="/">didn’t do this YET?</Link>
                <Link className="content-login__third-link" to="/">Sign up</Link>
            </div>
        </div>
    </div>
);

export default Login;