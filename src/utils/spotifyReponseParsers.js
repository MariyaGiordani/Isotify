const albumsList = (data) => data.items.map((album) => parseAlbumInfo(album));

const savedAlbums = (data) =>
  data.items.map((albumInfo) => parseAlbumInfo(albumInfo.album));

const parseAlbumInfo = (album) => ({
  title: album.name,
  author: album.artists[0].name,
  imgSrc: album.images[1].url,
  songsAmount: album.total_tracks,
  id: album.id
});

const topArtistsWithAlbums = (artists) =>
  artists.map((artist) => {
    const albums = albumsList(artist.albums.data);

    const totalTracks = albums.reduce(
      (total, currentAlbum) => total + currentAlbum.songsAmount,
      0
    );

    console.log(totalTracks);

    return {
      imgSrc: artist.images.length > 0 ? artist.images[0].url : '',
      name: artist.name,
      id: artist.id,
      albums,
      totalTracks
    };
  });

export { albumsList, savedAlbums, parseAlbumInfo, topArtistsWithAlbums };
