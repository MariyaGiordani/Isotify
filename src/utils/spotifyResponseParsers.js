const userInfo = (rawUserInfo) => ({
  name: rawUserInfo.display_name,
  profilePicture: rawUserInfo.images[0].url
});

export const playlists = (rawPlaylists) => {
  return rawPlaylists.map((playlistsInfo) => parsePlaylist(playlistsInfo));
};

const parsePlaylist = (playlistsInfo) => {
  return {
    namePlaylist: playlistsInfo.name,
    nameUser: playlistsInfo.owner.display_name,
    lengthTracks: playlistsInfo.tracks.total,
    id: playlistsInfo.id
  };
};

export const playlistsSearch = (rawPlaylists) => {
  return rawPlaylists.map((playlistsInfo) => playlistSearch(playlistsInfo));
};

const playlistSearch = (playlistsInfo) => ({
  ...parsePlaylist(playlistsInfo),
  imagePlaylist: playlistsInfo.images[0].url,
  followersPlaylist: playlistsInfo.followers.total
});

const albumTracks = (rawAlbumsTracks) => {
  return rawAlbumsTracks.map((track) => parseTrack(track));
};

const parseTrack = (tracks) => ({
  songName: tracks.name,
  artist: {
    name: tracks.artists[0].name,
    id: tracks.artists[0].id
  },
  songDuration: tracks.duration_ms,
  songNumber: tracks.track_number,
  id: tracks.id
});

const completeTrack = (track) => ({
  ...parseTrack(track),
  albumImage: track.album.images[0].url
});

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

const parseAlbumInfo = (album) => {
  return {
    title: album.name,
    artist: {
      name: album.artists[0].name,
      id: album.artists[0].id
    },
    date: album.release_date,
    imgSrc: album.images[0].url,
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
  parseSearch,
  completeTrack,
  completeTracks
};
