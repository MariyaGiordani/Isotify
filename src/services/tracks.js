import { spotifyInstance, createHeader } from './axiosInstances';

export function getAlbumTracks(albumId) {
  return spotifyInstance
    .get(`albums/${albumId}/tracks`, createHeader())
    .then((response) => response.data.items);
}

export function getSavedTracks() {
  return spotifyInstance
    .get('me/tracks', createHeader())
    .then((response) => response.data.items);
}
