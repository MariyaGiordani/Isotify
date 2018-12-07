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
      size: size,
      titleHref: titleHref,
      subtitleHref: subtitleHref,
      popup: popup,
      hasHover: hasHover,
      hoverCallback: hoverCallback
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
      titleHref = '',
      subtitleHref = '',
      popup = {},
      hasHover = false,
      hoverCallback = () => {}
    }) => ({
      imgSrc: imgSrc,
      size: size,
      title: name,
      subtitle: `${albums.length} Albums, ${totalTracks} Songs`,
      titleHref: `/artists/${id}`,
      key: id,
      subtitleHref: subtitleHref,
      popup: popup,
      hasHover: hasHover,
      hoverCallback: hoverCallback
    })
  );

const getPlaylistComponents = (playlist = []) =>
  playlist.map(
    ({
      imagePlaylist,
      size,
      namePlaylist,
      followersPlaylist,
      id,
      titleHref = '',
      subtitleHref = '',
      popup = {},
      hasHover = false,
      hoverCallback = () => {}
    }) => ({
      imgSrc: imagePlaylist,
      size: size,
      title: namePlaylist,
      subtitle: `${followersPlaylist} followers`,
      key: id,
      titleHref: titleHref,
      subtitleHref: subtitleHref,
      popup: popup,
      hasHover: hasHover,
      hoverCallback: hoverCallback
    })
  );

export { getSongsComponents, getArtistsComponents, getPlaylistComponents };
