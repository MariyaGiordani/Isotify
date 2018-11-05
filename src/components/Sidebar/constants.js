import headphoneImage from '../../assets/img/headphone.png';
import musicImage from '../../assets/img/music.png';
import playlistsImage from '../../assets/img/playlists.png';
import genresImage from '../../assets/img/genres.png';
import discoverImage from '../../assets/img/discover.png';
import settingsImage from '../../assets/img/settings.png';

export const LINKS = [
  {
    position: 1,
    name: 'Songs',
    to: '/songs',
    src: musicImage
  },
  {
    position: 2,
    name: 'Albums',
    to: '/albums',
    src: musicImage
  },
  {
    position: 3,
    name: 'Artists',
    to: '/artists',
    src: headphoneImage
  },
  {
    position: 4,
    name: 'Playlists',
    to: '/playlists',
    src: playlistsImage
  },
  {
    position: 5,
    name: 'Genres',
    to: '/genres',
    src: genresImage
  },
  {
    position: 6,
    name: 'Discover',
    to: '/discover',
    src: discoverImage,
    spacer: true
  },
  {
    position: 7,
    name: 'Settings',
    to: '/settings',
    src: settingsImage
  }
];
