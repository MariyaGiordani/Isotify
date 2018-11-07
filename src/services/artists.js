import { spotifyInstance, createHeader } from './axiosInstances';
import { getAlbumsFromArtist as getAllAlbums } from './albums';

function getTopArtists() {
  return spotifyInstance.get('me/top/artists', createHeader()).then((response) => response.data.items);
}

function getRelatedArtists(artistId) {
  return spotifyInstance.get(`artists/${artistId}/related-artists`, createHeader());
}

function getArtist(artistId) {
  return spotifyInstance.get(`artists/${artistId}`, createHeader()).then((artist) => {
    const promises = [getAllAlbums(artistId), getRelatedArtists(artistId)];
    return Promise.all(promises).then((values) => {
      console.log('dasd', values);
      return {
        ...artist.data,
        albums: values[0],
        relatedArtists: values[1]
      };
    });
  });
}

function getTopArtistsWithAlbums() {
  return getTopArtists().then((artists) => {
    return Promise.all(
      artists.map((artist) =>
        getAllAlbums(artist.id).then((albums) => ({
          ...artist,
          albums
        }))
      )
    );
  });
}

export { getTopArtists, getTopArtistsWithAlbums, getArtist };
