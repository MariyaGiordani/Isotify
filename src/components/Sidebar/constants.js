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
    alt: 'Musical note representing songs icon'
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
    alt: 'Headphones representing artists icon'
  },
  {
    name: 'Playlists',
    to: '/playlists',
    src: playlistsImage,
    alt: 'Playlists icon'
  },
  {
    name: 'Genres',
    to: '/genres',
    src: genresImage,
    alt: 'Genres icon'
  },
  {
    name: 'Discover',
    to: '/discover',
    src: discoverImage,
    spacer: true,
    alt: 'Compass representing discover icon'
  },
  {
    name: 'Settings',
    to: '/settings',
    src: settingsImage,
    alt: 'Gears representing settings icon'
  }
];
