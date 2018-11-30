import { spotifyInstance, createHeader } from './axiosInstances';
import { getArtistsAlbums } from './artists';
import { getFollowers } from './playlists';

export function getResultsSearch(query) {
  return (
    spotifyInstance
      .get(
        `/search?q=${query}&type=artist,track,album,playlist`,
        createHeader()
      )
      // .then((response) => ({
      //   albums: response.data.albums.items,
      //   playlists: response.data.playlists.items,
      //   tracks: response.data.tracks.items,
      //   artists: response.data.artists.items
      // }));
      .then((response) =>
        Promise.all([
          getArtistsAlbums(response.data.artists.items),
          getFollowers(response.data.playlists.items)
        ]).then(([artists, playlists]) => ({
          playlists,
          artists,

          albums: response.data.albums.items,
          tracks: response.data.tracks.items
        }))
      )
  );
}
