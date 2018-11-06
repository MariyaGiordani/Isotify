import { spotifyInstance, createHeader } from './axiosInstances';
import { getAlbumsFromArtist as getAllAlbums } from './albums';

function getTopArtists() {
  return spotifyInstance.get('me/top/artists', createHeader());
}

function getTopArtistsWithAlbums() {
  return getTopArtists().then((response) => {
    return Promise.all(
      response.data.items.map((artist) =>
        getAllAlbums(artist.id).then((albums) => ({
          ...artist,
          albums
        }))
      )
    );
  });
}

export { getTopArtists, getTopArtistsWithAlbums };
