import { spotifyInstance, createHeader } from './axiosInstances';
import { getAlbumsFromArtist as getAllAlbums } from './albums';
import axios from 'axios';

function getTopArtists(url) {
  return url
    ? axios
        .get(url, createHeader())
        .then(({ data: { items, next } }) => ({ items, next }))
    : spotifyInstance
        .get('me/top/artists', createHeader())
        .then(({ data: { items, next } }) => ({ items, next }));
}

function getRelatedArtists(artistId) {
  return spotifyInstance
    .get(`artists/${artistId}/related-artists`, createHeader())
    .then((response) => response.data.artists);
}

function getArtist(artistId) {
  return spotifyInstance
    .get(`artists/${artistId}`, createHeader())
    .then((artist) => {
      const promises = [getAllAlbums(artistId), getRelatedArtists(artistId)];
      return Promise.all(promises).then(([albums, relatedArtists]) => {
        return {
          ...artist.data,
          albums,
          relatedArtists
        };
      });
    });
}

function getArtistsAlbums(artists) {
  return Promise.all(
    artists.map((artist) =>
      getAllAlbums(artist.id).then((albums) => ({
        ...artist,
        albums
      }))
    )
  );
}

function getArtistsWithAlbums(artists) {
  return spotifyInstance
    .get(`artists?ids=${artists}`, createHeader())
    .then(({ data: { artists } }) =>
      getArtistsAlbums(artists).then((items) => ({ items }))
    );
}

function getMultipleArtists(artistsIds) {
  return Promise.all(artistsIds.map((artistId) => getArtist(artistId)));
}

function getTopArtistsWithAlbums(url) {
  return getTopArtists(url).then(({ items, next }) => {
    return Promise.all(
      items.map((artist) =>
        getAllAlbums(artist.id).then((albums) => ({
          ...artist,
          albums
        }))
      )
    ).then((items) => ({ items, next }));
  });
}

export {
  getTopArtists,
  getTopArtistsWithAlbums,
  getArtist,
  getArtistsWithAlbums,
  getMultipleArtists,
  getArtistsAlbums
};
