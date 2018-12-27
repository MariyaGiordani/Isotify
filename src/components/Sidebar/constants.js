import headphoneImage from '../../assets/img/headphone.png';
import musicImage from '../../assets/img/music.png';
import playlistsImage from '../../assets/img/playlists.png';
import genresImage from '../../assets/img/genres.png';
import discoverImage from '../../assets/img/discover.png';
import settingsImage from '../../assets/img/settings.png';

export const LINKS = [
  {
    name: 'Songs',
    to: '/songs',
    src: musicImage,
    alt: 'Musical note representing songs icon',
    active: true
  },
  {
    name: 'Albums',
    to: '/albums',
    src: musicImage,
    alt: 'Musical note representing albums icon',
    active: true
  },
  {
    name: 'Artists',
    to: '/artists',
    src: headphoneImage,
    alt: 'Headphones representing artists icon',
    active: true
  },
  {
    name: 'Playlists',
    to: '/playlists',
    src: playlistsImage,
    alt: 'Playlists icon',
    active: false
  },
  {
    name: 'Genres',
    to: '/genres',
    src: genresImage,
    alt: 'Genres icon',
    active: false
  },
  {
    name: 'Discover',
    to: '/discover',
    src: discoverImage,
    spacer: true,
    alt: 'Compass representing discover icon',
    active: true
  },
  {
    name: 'Settings',
    to: '/settings',
    src: settingsImage,
    alt: 'Gears representing settings icon',
    active: true
  }
];
