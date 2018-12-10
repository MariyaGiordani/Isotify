const getSongsComponents = (tracks = []) =>
  tracks.map(({ albumImage, songName, artist, id, size }) => ({
    imgSrc: albumImage,
    title: songName,
    subtitle: artist.name,
    key: id,
    size: size
  }));

const getArtistsComponents = (artists = []) =>
  artists.map(({ imgSrc, name, id, albums, totalTracks, size }) => ({
    imgSrc: imgSrc,
    size: size,
    title: name,
    subtitle: `${albums.length} Albums, ${totalTracks} Songs`,
    titleHref: `/artists/${id}`,
    key: id
  }));

const getPlaylistComponents = (playlist = []) =>
  playlist.map(
    ({ imagePlaylist, size, namePlaylist, followersPlaylist, id }) => ({
      imgSrc: imagePlaylist,
      size: size,
      title: namePlaylist,
      subtitle: `${followersPlaylist} followers`,
      key: id
    })
  );

export { getSongsComponents, getArtistsComponents, getPlaylistComponents };
