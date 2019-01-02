import { spotifyInstance, createHeader } from './axiosInstances';
import axios from 'axios';

export function getAlbumTracks(albumId) {
  return spotifyInstance
    .get(`albums/${albumId}/tracks`, createHeader())
    .then(({ data: { items } }) => ({ items }));
}

export function getArtistTopTracks(artistId) {
  return spotifyInstance
    .get(`/artists/${artistId}/top-tracks?country=br`, createHeader())
    .then(({ data: { tracks } }) => ({ tracks }));
}

export function getMultipleArtistsTopTracks(artistsIds) {
  return Promise.all(artistsIds.map((artist) => getArtistTopTracks(artist)));
}

export function getSavedTracks(url) {
  return url
    ? axios
        .get(url, createHeader())
        .then(({ data: { total, items, next } }) => ({ total, items, next }))
    : spotifyInstance
        .get('me/tracks', createHeader())
        .then(({ data: { total, items, next } }) => ({ total, items, next }));
}
