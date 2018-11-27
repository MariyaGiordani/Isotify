const userInfo = (rawUserInfo) => ({
  name: rawUserInfo.display_name,
  profilePicture: rawUserInfo.images[0].url
});

const albumTracks = (rawAlbumsTracks) => {
  return rawAlbumsTracks.map((track) => parseAlbumTracks(track));
};
const parseAlbumTracks = (tracks) => {
  return {
    songName: tracks.name,
    songDuration: tracks.duration_ms,
    songNumber: tracks.track_number,
    songId: tracks.id
  };
};
const albumsList = (rawAlbums) =>
  rawAlbums.map((album) => parseAlbumInfo(album));

const savedAlbums = (rawAlbums) =>
  rawAlbums.map((albumInfo) => parseAlbumInfo(albumInfo.album));

const parseAlbumInfo = (album) => {
  return {
    title: album.name,
    artist: {
      name: album.artists[0].name,
      id: album.artists[0].id
    },
    date: album.release_date,
    imgSrc: album.images[1].url,
    songsAmount: album.total_tracks,
    id: album.id
  };
};

const parseArtist = (artist) => ({
  imgSrc: artist.images.length > 0 ? artist.images[0].url : '',
  name: artist.name,
  id: artist.id
});

const artistWithAlbumsAndRelated = (artist) => {
  const relatedArtists = artist.relatedArtists.map((relatedArtist) =>
    parseArtist(relatedArtist)
  );
  return {
    ...artistWithAlbums(artist),
    relatedArtists
  };
};

const artistWithAlbums = (artist) => {
  const albums = albumsList(artist.albums);
  const totalTracks = albums.reduce(
    (total, currentAlbum) => total + currentAlbum.songsAmount,
    0
  );

  return {
    ...parseArtist(artist),
    albums,
    totalTracks
  };
};

const topArtistsWithAlbums = (artists) =>
  artists.map((artist) => artistWithAlbums(artist));

export {
  albumsList,
  savedAlbums,
  parseAlbumInfo,
  topArtistsWithAlbums,
  userInfo,
  artistWithAlbums,
  artistWithAlbumsAndRelated,
  albumTracks
};
