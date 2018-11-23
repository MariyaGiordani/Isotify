import axios from 'axios';

export function spotifyLogin(params) {
  const stateKey = 'spotify_auth_state';

  const access_token = params.access_token,
    state = params.state,
    storedState = localStorage.getItem(stateKey);

  localStorage.setItem('access_token', access_token);

  if (access_token && (state == null || state !== storedState)) {
    alert('There was an error during the authentication');
  } else {
    localStorage.removeItem(stateKey);
    if (access_token) {
      axios
        .get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: 'Bearer ' + access_token
          }
        })
        .then(function({ data: { id } }) {
          localStorage.setItem('userId', id);
        })
        .catch(function(error) {
          alert('Login failed');
        });
    }
  }
}
