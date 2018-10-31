import spotifyInstance from './axiosInstances';

function createHeader(extraHeader) {
  const accessToken = localStorage.getItem('access_token');
  return {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  };
}

function getSavedAlbums() {
  return spotifyInstance.get('me/albums', createHeader());
}

function getAlbums(ids) {
  return spotifyInstance.get(`/albums/?ids=${ids}`, createHeader());
}

export { getSavedAlbums, getAlbums };
