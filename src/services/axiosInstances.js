import axios from 'axios';

const urlPrefix = 'https://api.spotify.com/v1/';

const spotifyInstance = axios.create({
  baseURL: urlPrefix
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

export { spotifyInstance, createHeader, urlPrefix };
