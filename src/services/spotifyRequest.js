export function spotifyRequest(params) {
  const stateKey = 'spotify_auth_state';
  /**
   * Obtains parameters from the hash of the URL
   * @return Object
   */

  /**
   * Generates a random string containing numbers and letters
   * @param  {number} length The length of the string
   * @return {string} The generated string
   */

  localStorage.setItem('access_token', params.access_token);

  const access_token = localStorage.getItem('access_token'),
    state = params.state,
    storedState = localStorage.getItem(stateKey);

  if (access_token && (state == null || state !== storedState)) {
    alert('There was an error during the authentication');
  } else {
    localStorage.removeItem(stateKey);
    if (access_token) {
      let newRequest = new XMLHttpRequest();
      newRequest.open('GET', 'https://api.spotify.com/v1/me');
      newRequest.setRequestHeader('Authorization', 'Bearer ' + access_token);
      newRequest.onload = function(response) {
        if (newRequest.status >= 200 && newRequest.status < 400) {
          let userRequest = JSON.parse(response.srcElement.response);
          localStorage.setItem('userId', userRequest.id);
          const userId = localStorage.getItem('userId');
          console.log(userId);
        } else {
          alert('Login não efetuado');
        }
      };
      newRequest.send();
    }
  }
}
