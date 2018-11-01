import spotifyInstance from './axiosInstances';
import { getAllAlbumsFromArtistRecursively as getAllAlbums } from './albums';

function createHeader(extraHeader) {
  const accessToken = localStorage.getItem('access_token');
  return {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  };
}

function getTopArtists() {
  return spotifyInstance.get('me/top/artists', createHeader());
}

function getTopArtistsWithAlbums() {
  return getTopArtists().then((response) => {
    return Promise.all(
      response.data.items.map((artist) =>
        getAllAlbums(artist.id, 0, []).then((albums) => ({
          ...artist,
          albums
        }))
      )
    );
  });
}

export { getTopArtists, getTopArtistsWithAlbums };
