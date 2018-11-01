import spotifyInstance from './axiosInstances';

function createHeader(extraHeader) {
  const accessToken = localStorage.getItem('access_token');
  return {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  };
}

function getSavedAlbums() {
  return spotifyInstance.get('me/albums', createHeader());
}

function getAlbums(ids) {
  return spotifyInstance.get(`/albums/?ids=${ids}`, createHeader());
}

function getAlbumsFromArtist(artistId) {
  return spotifyInstance.get(
    `artists/${artistId}/albums?market=BR&include_groups=album,single&limit=50`,
    createHeader()
  );
}

function getAllAlbumsFromArtistRecursively(artistId, offset, albums) {
  return spotifyInstance
    .get(
      `artists/${artistId}/albums?market=BR&include_groups=album,single&limit=50&offset=${offset}`,
      createHeader()
    )
    .then(function(response) {
      const remainder = response.data.total - response.data.offset - 50;
      if (remainder > 0) {
        const newOffset = response.data.offset + 50;
        return getAllAlbumsFromArtistRecursively(
          artistId,
          newOffset,
          albums.concat(response.data.items)
        );
      } else {
        return albums.concat(response.data.items);
      }
    });
}

export {
  getSavedAlbums,
  getAlbums,
  getAlbumsFromArtist,
  getAllAlbumsFromArtistRecursively
};
