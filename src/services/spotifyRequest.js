import { getHashParams } from '../utils/getHashParams';

export function spotifyRequest() {
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
  const params = getHashParams();
  const access_token = params.access_token,
    state = params.state,
    storedState = localStorage.getItem(stateKey);
  if (access_token && (state == null || state !== storedState)) {
    alert('There was an error during the authentication');
  } else {
    localStorage.removeItem(stateKey);
    if (access_token) {
      let mocks = [
        {
          name: 'Amy',
          year: '2018'
        }
      ];

      localStorage.setItem('requestSpotify', JSON.stringify(mocks));
      const objectResponse = localStorage.getItem('requestSpotify');
      let objectRequest = JSON.parse(objectResponse);
    } else {
      alert('Login failed');
    }
  }
}
