import { spotifyInstance, createHeader } from './axiosInstances';

export function getPlaylists() {
  return spotifyInstance
    .get('me/playlists', createHeader())
    .then((response) => console.log(response.data.items));
}
