import { spotifyInstance, createHeader } from './axiosInstances';
import { getAllAlbumsFromArtist as getAllAlbums } from './albums';

function getTopArtists() {
  return spotifyInstance.get('me/top/artists', createHeader());
}

function getRelatedArtists(artistId) {
  return spotifyInstance.get(
    `artists/${artistId}/related-artists`,
    createHeader()
  );
}

function getArtist(artistId) {
  return spotifyInstance
    .get(`artists/${artistId}`, createHeader())
    .then((artist) => {
      // TODO: Promise.all
      return getAllAlbums(artistId).then((albums) => ({
        ...artist.data,
        albums
      }));
    })
    .then((artist) => {
      return getRelatedArtists(artistId).then((relatedArtists) => ({
        ...artist,
        relatedArtists
      }));
    });
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

export { getTopArtists, getTopArtistsWithAlbums, getArtist };
