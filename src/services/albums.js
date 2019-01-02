import { spotifyInstance, createHeader, urlPrefix } from './axiosInstances';
import axios from 'axios';

function getSavedAlbums(url) {
  return url
    ? axios
        .get(url, createHeader())
        .then(({ data: { items, next } }) => ({ items, next }))
    : spotifyInstance
        .get('me/albums', createHeader())
        .then(({ data: { items, next } }) => ({ items, next }));
}

function getAlbums(ids) {
  return spotifyInstance
    .get(`/albums/?ids=${ids}`, createHeader())
    .then(({ data: { items, next } }) => ({ items, next }));
}

function getAlbumsFromArtist(artistId) {
  const nextUrl = `${urlPrefix}artists/${artistId}/albums?market=BR&include_groups=album,single&limit=50&`;
  const albums = [];
  return getAlbumsRecursively(albums, nextUrl);
}

function getAlbumsRecursively(albums, nextUrl) {
  return axios.get(nextUrl, createHeader()).then(function(response) {
    let concatedAlbums = albums.concat(response.data.items);
    if (response.data.next) {
      return getAlbumsRecursively(concatedAlbums, response.data.next);
    } else {
      return concatedAlbums;
    }
  });
}

export { getSavedAlbums, getAlbums, getAlbumsFromArtist };
