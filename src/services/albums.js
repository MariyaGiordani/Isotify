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

function getAlbumsFromArtist(artistId) {
  return spotifyInstance.get(
    `artists/${artistId}/albums?market=BR&include_groups=album&limit=20`,
    createHeader()
  );
}

export { getSavedAlbums, getAlbums, getAlbumsFromArtist };
