import { spotifyInstance, createHeader } from './axiosInstances';

export function getPlaylists() {
  return spotifyInstance
    .get('me/playlists', createHeader())
    .then((response) => response.data.items);
}

export function getPlaylist(playListId) {
  return spotifyInstance
    .get(`playlists/${playListId}`, createHeader())
    .then((response) => response.data);
}

export function getGlobalTopTracks() {
  return getPlaylist('37i9dQZEVXbMDoHDwVN2tF');
}
