const albumsList = (data) => data.items.map((album) => parseAlbumInfo(album));

const savedAlbums = (data) =>
  data.items.map((albumInfo) => parseAlbumInfo(albumInfo.album));

const parseAlbumInfo = (album) => ({
  title: album.name,
  author: album.artists[0].name,
  imgSrc: album.images[1].url
});

export { albumsList, savedAlbums, parseAlbumInfo };
