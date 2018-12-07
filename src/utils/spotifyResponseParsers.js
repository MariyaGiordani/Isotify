const userInfo = (rawUserInfo) => ({
  name: rawUserInfo.display_name,
  profilePicture: rawUserInfo.images[0].url
});

export const playlists = (rawPlaylists) => {
  return rawPlaylists.map((playlistsInfo) => parsePlaylist(playlistsInfo));
};

const parsePlaylist = ({
  name,
  owner: { displayname },
  tracks: { total },
  id
}) => {
  return {
    namePlaylist: name,
    nameUser: displayname,
    lengthTracks: total,
    id
  };
};

export const playlistsSearch = (rawPlaylists) => {
  return rawPlaylists.map((playlistsInfo) => playlistSearch(playlistsInfo));
};

const playlistSearch = (playlistsInfo) => {
  const { images, followers } = playlistsInfo;
  return {
    ...parsePlaylist(playlistsInfo),
    imagePlaylist: images[0].url,
    followersPlaylist: followers.total
  };
};

const albumTracks = (rawAlbumsTracks) => {
  return rawAlbumsTracks.map((track) => parseTrack(track));
};

const parseTrack = ({ name, artists, duration_ms, track_number, id }) => ({
  songName: name,
  artist: {
    name: artists[0].name,
    id: artists[0].id
  },
  songDuration: duration_ms,
  songNumber: track_number,
  id: id
});

const completeTrack = (track) => {
  const { album } = track;
  return {
    ...parseTrack(track),
    albumImage: album.images[0].url
  };
};

const completeTracks = (rawTracks) => {
  return rawTracks.map((track) => completeTrack(track));
};

const parseSearch = ({ albums, artists, playlists, tracks }) => {
  return {
    albums: albumsList(albums),
    artists: artistsWithAlbums(artists),
    tracks: completeTracks(tracks),
    playlists: playlistsSearch(playlists)
  };
};

const albumsList = (rawAlbums) =>
  rawAlbums.map((album) => parseAlbumInfo(album));

const savedAlbums = (rawAlbums) =>
  rawAlbums.map((albumInfo) => parseAlbumInfo(albumInfo.album));

const savedTracks = (rawTracks) =>
  rawTracks.map((trackInfo) => completeTrack(trackInfo.track));

const parseAlbumInfo = ({
  name,
  artists,
  release_date,
  images,
  total_tracks,
  id
}) => {
  return {
    title: name,
    artist: {
      name: artists[0].name,
      id: artists[0].id
    },
    date: release_date,
    imgSrc: images[0].url,
    songsAmount: total_tracks,
    id: id
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

const artistsWithAlbums = (artists) =>
  artists.map((artist) => artistWithAlbums(artist));

export {
  albumsList,
  savedAlbums,
  parseAlbumInfo,
  artistsWithAlbums,
  userInfo,
  artistWithAlbums,
  artistWithAlbumsAndRelated,
  albumTracks,
  savedTracks,
  parseSearch,
  completeTrack,
  completeTracks
};
