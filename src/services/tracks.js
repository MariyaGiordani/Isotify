import { spotifyInstance, createHeader } from './axiosInstances';

export function getAlbumTracks(albumId) {
  return spotifyInstance
    .get(`albums/${albumId}/tracks`, createHeader())
    .then((response) => response.data.items);
}

export function getArtistTopTracks(artistId) {
  return spotifyInstance
    .get(`/artists/${artistId}/top-tracks?country=br`, createHeader())
    .then((response) => response.data.tracks);
}

export function getMultipleArtistsTopTracks(artistsIds) {
  return Promise.all(artistsIds.map((artist) => getArtistTopTracks(artist)));
}

export function getSavedTracks() {
  return spotifyInstance.get('me/tracks', createHeader()).then((response) => {
    const { total, items } = response.data;
    return { total, items };
  });
}
