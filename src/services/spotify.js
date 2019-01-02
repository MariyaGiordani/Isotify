import { generateRandomString } from '../utils/generateRandomString';
export function authenticate() {
  const stateKey = 'spotify_auth_state';
  const state = generateRandomString(16);
  localStorage.setItem(stateKey, state);

  const client_id = process.env.REACT_APP_API_KEY;
  const redirect_uri = `${process.env.REACT_APP_API_URI}login/`;
  const scope =
    'user-read-private user-read-email user-library-read user-top-read streaming user-read-birthdate user-read-email user-read-private user-follow-read user-follow-modify ';

  let url = 'https://accounts.spotify.com/authorize';

  url += '?response_type=token';
  url += `&client_id=${encodeURIComponent(client_id)}`;
  url += `&scope=${encodeURIComponent(scope)}`;
  url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  url += `&state=${encodeURIComponent(state)}`;
  window.location = url;
}
