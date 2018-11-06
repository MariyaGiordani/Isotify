import { spotifyInstance, createHeader } from './axiosInstances';
import axios from 'axios';

function getSavedAlbums() {
  return spotifyInstance.get('me/albums', createHeader());
}

function getAlbums(ids) {
  return spotifyInstance.get(`/albums/?ids=${ids}`, createHeader());
}

function getAllAlbumsFromArtist(artistId) {
  const nextUrl = `https://api.spotify.com/v1/artists/${artistId}/albums?market=BR&include_groups=album,single&limit=50&`;
  const albums = [];
  return getAllAlbumsFromArtistRecursively(albums, nextUrl);
}

function getAllAlbumsFromArtistRecursively(albums, nextUrl) {
  return axios.get(nextUrl, createHeader()).then(function(response) {
    if (response.data.next) {
      return getAllAlbumsFromArtistRecursively(albums.concat(response.data.items), response.data.next);
    } else {
      return albums.concat(response.data.items);
    }
  });
}

export { getSavedAlbums, getAlbums, getAllAlbumsFromArtist };
