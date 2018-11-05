import axios from 'axios';

const spotifyInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/'
});

function createHeader(extraHeader) {
  const accessToken = localStorage.getItem('access_token');
  return {
    headers: {
      Authorization: 'Bearer ' + accessToken
    },
    ...extraHeader
  };
}

export { spotifyInstance, createHeader };
