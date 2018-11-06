import { spotifyInstance, createHeader, urlPrefix } from './axiosInstances';
import axios from 'axios';

function getSavedAlbums() {
  return spotifyInstance.get('me/albums', createHeader());
}

function getAlbums(ids) {
  return spotifyInstance.get(`/albums/?ids=${ids}`, createHeader());
}

function getAlbumsFromArtist(artistId) {
  const nextUrl = `${urlPrefix}artists/${artistId}/albums?market=BR&include_groups=album,single&limit=50&`;
  const albums = [];
  return getAlbumsRecursively(albums, nextUrl);
}

function getAlbumsRecursively(albums, nextUrl) {
  return axios.get(nextUrl, createHeader()).then(function(response) {
    if (response.data.next) {
      return getAlbumsRecursively(albums.concat(response.data.items), response.data.next);
    } else {
      return albums.concat(response.data.items);
    }
  });
}

export { getSavedAlbums, getAlbums, getAlbumsFromArtist };
