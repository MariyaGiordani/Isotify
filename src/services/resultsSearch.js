import { spotifyInstance, createHeader } from './axiosInstances';

export function getResultsSearch(query) {
  return spotifyInstance
    .get(`/search?q=${query}&type=artist,track,album,playlist`, createHeader())
    .then((response) => {
      Promise.all([getArtists, getFollowers]).then(([artists, followers]) => {
        return {
          playlists,
          artists,

          albums: response.data.albums.items,
          tracks: response.data.tracks.items
        };
      });
    });
}

// export function getPlaylistFollowers(playlist_id) {
//   return spotifyInstance
//     .get(`playlists/${playlist_id}`, createHeader())
//     .then((response) => console.log(response));
// }
