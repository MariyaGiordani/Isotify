const getSongsComponents = (tracks = []) =>
  tracks.map(
    ({
      albumImage,
      songName,
      artist,
      id,
      size,
      titleHref = '',
      subtitleHref = '',
      popup = {},
      hasHover = false,
      hoverCallback = () => {}
    }) => ({
      imgSrc: albumImage,
      title: songName,
      subtitle: artist.name,
      key: id,
      size,
      titleHref,
      subtitleHref,
      popup,
      hasHover,
      hoverCallback
    })
  );

const getArtistsComponents = (artists = []) =>
  artists.map(
    ({
      imgSrc,
      name,
      id,
      albums,
      totalTracks,
      size,
      subtitleHref = '',
      popup = {},
      hasHover = false,
      hoverCallback = () => {}
    }) => ({
      imgSrc,
      size,
      title: name,
      subtitle: `${albums.length} Albums, ${totalTracks} Songs`,
      titleHref: `/artists/${id}`,
      key: id,
      subtitleHref,
      popup,
      hasHover,
      hoverCallback
    })
  );

const getPlaylistComponents = (playlist = []) =>
  playlist.map(
    ({ imagePlaylist, size, namePlaylist, followersPlaylist, id }) => ({
      imgSrc: imagePlaylist,
      size,
      title: namePlaylist,
      subtitle: `${followersPlaylist} followers`,
      key: id,
      id
    })
  );

export { getSongsComponents, getArtistsComponents, getPlaylistComponents };
