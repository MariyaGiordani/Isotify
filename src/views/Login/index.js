import React from 'react';
import { Redirect } from 'react-router-dom';

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
export default () => {
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
        <a
          className="content-login__first-link"
          href="https://www.spotify.com/br/password-reset/"
        >
          Remember Password?
        </a>
        <div className="content-login__container-text">
          <p className="content-login__second-link">didn’t do this YET?</p>
          <a
            className="content-login__third-link"
            href="https://www.spotify.com/br/signup/?forward_url=https%3A%2F%2Fwww.spotify.com%2Fbr%2Faccount%2Foverview%2F"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};
