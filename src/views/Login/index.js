import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { spotifyRequest } from '../../services/spotifyRequest';
import { authenticate } from '../../services/spotify';
import { getHashParams } from '../../utils/getHashParams';
import { isUserLogged } from '../../utils/isUserLogged';
import './index.css';

const access_token_test = localStorage.getItem('access_token');

if (!access_token_test) {
  const params = getHashParams();
  if (params.access_token) {
    spotifyRequest(params);
  }
}
export const Login = () => {
  return isUserLogged() ? (
    <Redirect to="/albums" />
  ) : (
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
