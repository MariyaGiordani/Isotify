import { spotifyInstance, createHeader } from './axiosInstances';

export function getUserInfo() {
  return spotifyInstance
    .get('me', createHeader())
    .then((response) => response.data);
}
