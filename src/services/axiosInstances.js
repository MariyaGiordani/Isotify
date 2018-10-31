import axios from 'axios';

const spotifyInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/'
});

export default spotifyInstance;
