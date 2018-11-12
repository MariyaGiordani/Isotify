import { spotifyInstance, createHeader } from './axiosInstances';

export function getNewReleases() {
  return spotifyInstance
    .get('browse/new-releases', createHeader())
    .then((response) => response.data);
}
