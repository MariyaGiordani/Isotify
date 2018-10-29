import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { authenticate } from '../../services/spotify';
import { spotifyRequest } from '../../services/spotifyRequest';
import { getHashParams } from '../../utils/getHashParams';
import './index.css';

const access_token_storage = localStorage.getItem('access_token');

const Login = () => {
  if (!access_token_storage) {
    const params = getHashParams();
    if (params.access_token) {
      spotifyRequest(params);
      return <Redirect to="/albums" />;
    }
  }
  return (
    <div className="content-background">
      <div className="content-background__content-login">
        <div className="content-login__container-title">
          <h1 className="container-title__phrase">Login</h1>
          <button className="container-title__button" onClick={authenticate}>
            Login with Spotify
          </button>
        </div>
        <Link className="content-login__first-link" to="/">
          Remember Password?
        </Link>
        <div className="content-login__container-text">
          <Link className="content-login__second-link" to="/">
            didn’t do this YET?
          </Link>
          <Link className="content-login__third-link" to="/">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
