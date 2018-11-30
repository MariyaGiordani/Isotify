import { spotifyInstance, createHeader } from './axiosInstances';

function getPlaylists() {
  return spotifyInstance
    .get('me/playlists', createHeader())
    .then((response) => response.data.items);
}

function getPlaylist(playlistId) {
  return spotifyInstance
    .get(`playlists/${playlistId}`, createHeader())
    .then((response) => response);
}

function getFollowers(playlists) {
  return Promise.all(
    playlists.map((playlist) =>
      getPlaylist(playlist.id).then((followers) => ({
        ...playlist,
        followers
      }))
    )
  );
}

export { getPlaylists, getPlaylist, getFollowers };
