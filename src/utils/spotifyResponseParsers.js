import { release } from 'os';

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
    idPlaylist: playlistsInfo.id
  };
};

const albumTracks = (rawAlbumsTracks) => {
  return rawAlbumsTracks.map((track) => parseTrack(track));
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
  songId: id,
  artist: {
    name: artists[0].name,
    id: artists[0].id
  }
});

const albumsList = (rawAlbums) =>
  rawAlbums.map((album) => parseAlbumInfo(album));

const savedAlbums = (rawAlbums) =>
  rawAlbums.map((albumInfo) => parseAlbumInfo(albumInfo.album));

const parseAlbumInfo = ({
  name,
  release_date,
  total_tracks,
  id,
  artists,
  images
}) => {
  return {
    title: name,
    artist: {
      name: artists[0].name,
      id: artists[0].id
    },
    date: release_date,
    imgSrc: images[1].url,
    songsAmount: total_tracks,
    id
  };
};

const parseArtist = (artist) => ({
  imgSrc: artist.images.length > 0 ? artist.images[0].url : '',
  name: artist.name,
  id: artist.id,
  genres: artist.genres
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
  albumTracks,
  parseArtistTopTracks,
  parseArtist,
  parsePlaylistTracks
};
