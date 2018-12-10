const userInfo = (rawUserInfo) => ({
  name: rawUserInfo.display_name,
  profilePicture: rawUserInfo.images[0].url
});

export const playlists = (rawPlaylists) => {
  return rawPlaylists.map((playlistsInfo) => parsePlaylist(playlistsInfo));
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
const parsePlaylist = ({ name, owner, tracks, id }) => {
  return {
    namePlaylist: name,
    nameUser: owner.display_name,
    lengthTracks: tracks.total,
    id
  };
};

const albumTracks = (rawAlbumsTracks) => {
  return rawAlbumsTracks.map((track) => parseTrack(track));
};

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

const parseArtistTopTracks = (artistTracks) =>
  artistTracks.map((track) => {
    const artist = { name: track.artists[0].name, id: track.artists[0].id };
    return {
      ...parseTrack(track),
      artist
    };
  });

const parsePlaylistTracks = (trackContainers) =>
  trackContainers.map(({ track }) => parseTrack(track));

const parseTrack = ({ name, duration_ms, track_number, id, artists }) => ({
  songName: name,
  songDuration: duration_ms,
  songNumber: track_number,
  artist: {
    name: artists[0].name,
    id: artists[0].id
  },
  id: id
});

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
    id
  };
};

const parseArtist = ({ images, name, id, genres }) => ({
  imgSrc: images.length > 0 ? images[0].url : '',
  name: name,
  id: id,
  genres: genres
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
  completeTracks,
  parseArtistTopTracks,
  parseArtist,
  parsePlaylistTracks
};
