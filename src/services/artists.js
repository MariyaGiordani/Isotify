import { spotifyInstance, createHeader } from './axiosInstances';
import { getAlbumsFromArtist as getAllAlbums } from './albums';

function getTopArtists() {
  return spotifyInstance.get('me/top/artists', createHeader()).then((response) => response.data.items);
}

function getTopArtistsWithAlbums() {
  return getTopArtists().then((artists) => {
    return Promise.all(
      artists.map((artist) =>
        getAllAlbums(artist.id).then((albums) => ({
          ...artist,
          albums
        }))
      )
    );
  });
}

export { getTopArtists, getTopArtistsWithAlbums };
