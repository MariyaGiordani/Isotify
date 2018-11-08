const albumsList = (rawAlbums) => rawAlbums.map((album) => parseAlbumInfo(album));

const savedAlbums = (rawAlbums) => rawAlbums.map((albumInfo) => parseAlbumInfo(albumInfo.album));

const parseAlbumInfo = (album) => ({
  title: album.name,
  artist: {
    name: album.artists[0].name,
    id: album.artists[0].id
  },
  imgSrc: album.images[1].url,
  songsAmount: album.total_tracks,
  id: album.id
});

const parseArtist = (artist) => ({
  imgSrc: artist.images.length > 0 ? artist.images[0].url : '',
  name: artist.name,
  id: artist.id
});

const artistWithAlbumsAndRelated = (artist) => {
  const relatedArtists = artist.relatedArtists.map((relatedArtist) => parseArtist(relatedArtist));
  return {
    ...artistWithAlbums(artist),
    relatedArtists
  };
};

const artistWithAlbums = (artist) => {
  const albums = albumsList(artist.albums);
  const totalTracks = albums.reduce((total, currentAlbum) => total + currentAlbum.songsAmount, 0);

  return {
    ...parseArtist(artist),
    albums,
    totalTracks
  };
};

const topArtistsWithAlbums = (artists) => artists.map((artist) => artistWithAlbums(artist));

export {
  albumsList,
  savedAlbums,
  parseAlbumInfo,
  topArtistsWithAlbums,
  artistWithAlbums,
  artistWithAlbumsAndRelated
};
