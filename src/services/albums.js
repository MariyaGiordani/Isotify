import { spotifyInstance, createHeader } from './axiosInstances';
import axios from 'axios';

function getSavedAlbums() {
  return spotifyInstance.get('me/albums', createHeader());
}

function getAlbums(ids) {
  return spotifyInstance.get(`/albums/?ids=${ids}`, createHeader());
}

function getAllAlbumsFromArtist(artistId) {
  return spotifyInstance
    .get(
      `artists/${artistId}/albums?market=BR&include_groups=album,single&limit=50&`,
      createHeader()
    )
    .then(function(response) {
      const nextUrl = response.data.next;
      return nextUrl
        ? getAllAlbumsFromArtistRecursively(
            response.data.items,
            response.data.next
          )
        : response.data.items;
    });
}

function getAllAlbumsFromArtistRecursively(albums, nextUrl) {
  return axios.get(nextUrl, createHeader()).then(function(response) {
    if (response.data.next) {
      return getAllAlbumsFromArtistRecursively(
        albums.concat(response.data.items),
        response.data.next
      );
    } else {
      return albums.concat(response.data.items);
    }
  });
}

export { getSavedAlbums, getAlbums, getAllAlbumsFromArtist };
