import React from 'react';

import playlisticon from '../../assets/img/playlisticon.png';
import prev from '../../assets/img/prev.png';
import pause from '../../assets/img/pause.png';
import next from '../../assets/img/next.png';
import volume from '../../assets/img/speaker.png';

import transferPlaybackHere from '../../services/transferPlaybackHere';
import playMusic from '../../services/playMusic';

import './musicPlayer.css';

export const PlayerContext = React.createContext();

export class MusicPlayerProvider extends React.Component {
  state = {
    player: {},
    deviceId: '',
    loggedIn: false,
    error: '',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    albumName: 'Album Name',
    playing: false,
    position: 0,
    duration: 0,
    onPrevClick: () => {},
    onPlayClick: () => {},
    onNextClick: () => {},
    onClickPlayAlbum: () => {}
  };

  componentDidMount = () => {
    this.playerCheckInterval = setInterval(
      () => this.checkForPlayer(this.player),
      1000
    );
  };

  createEventHandlers = () => {
    this.player.on('initialization_error', (e) => {});
    this.player.on('account_error', (e) => {});
    this.player.on('playback_error', (e) => {});

    this.player.on('player_state_changed', this.onStateChanged);

    this.player.on('ready', this.transferMusicFromSpotify);
  };

  transferMusicFromSpotify = (data) => {
    let { device_id } = data;
    this.setState({ deviceId: device_id });
    transferPlaybackHere(device_id);
  };

  createPlayer = (accessToken) => {
    this.player = new window.Spotify.Player({
      name: 'Isotify - EMA',
      getOAuthToken: (cb) => {
        cb(accessToken);
      }
    });
  };

  updateStatePlayersFunction = () => {
    const onPrevClick = () => {
      this.player.previousTrack();
    };

    const onPlayClick = () => {
      this.player.togglePlay();
      const { playing } = this.state;
      this.setState({ playing: !playing });
    };

    const onNextClick = () => {
      this.player.nextTrack();
    };

    const onClickPlayAlbum = (id) => {
      const { deviceId } = this.state;
      playMusic(deviceId, id);
    };

    this.setState({
      onPrevClick,
      onPlayClick,
      onNextClick,
      onClickPlayAlbum
    });
  };
  checkForPlayer = () => {
    const { accessToken } = this.props;
    if (window.Spotify !== null && accessToken) {
      this.setState({ loggedIn: true });
      clearInterval(this.playerCheckInterval);

      this.createPlayer(accessToken);
      this.updateStatePlayersFunction();

      this.createEventHandlers();
      this.player.connect();
    }
  };

  onStateChanged = (state) => {
    if (state !== null) {
      const {
        current_track: currentTrack,
        position,
        duration
      } = state.track_window;

      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists
        .map((artist) => artist.name)
        .join(', ');

      const playing = !state.paused;
      this.setState({
        position,
        duration,
        trackName,
        albumName,
        artistName,
        playing,
        volume,
        mute: false
      });
    }
  };

  setVolumeTrack = () => {
    const { volume } = this.state;
    this.player.getVolume().then((playerVolume) => {
      const { mute } = this.state;
      let newVolume;
      if (mute) {
        newVolume = volume;
        this.setState({ mute: false });
      } else {
        newVolume = 0;
        this.setState({ volume: playerVolume, mute: true });
      }
      this.player.setVolume(newVolume).then(() => {
        this.setState({ mute: !mute });
      });
    });
  };

  onVolumeClick = () => this.player.setVolumeTrack();

  render = () => {
    const {
      trackName,
      artistName,
      onPrevClick,
      onPlayClick,
      onNextClick,
      loggedIn
    } = this.state;
    const { children } = this.props;

    return (
      <PlayerContext.Provider value={this.state}>
        {children}
        {loggedIn && (
          <div className="player">
            <div className="player__container">
              <button className="container__button">
                <div className="container__playlist-icon">
                  <img
                    className="playlist-icon__image"
                    alt="Playlist-icon"
                    src={playlisticon}
                  />
                </div>
              </button>

              <div className="playlist-icon__music-info">
                <h1 className="music-info__name">{trackName}</h1>
                <h2 className="music-info__band">{artistName}</h2>
              </div>
            </div>

            <div className="player__buttons">
              <button className="buttons__prev" onClick={() => onPrevClick()}>
                <div className="buttons__prev-container">
                  <img
                    className="prev-container__image"
                    alt="Prev Button"
                    src={prev}
                  />
                </div>
              </button>
              <button className="buttons__pause" onClick={() => onPlayClick()}>
                <div className="buttons__pause-container">
                  <img
                    className="pause-container__image"
                    alt="Pause Button"
                    src={pause}
                  />
                </div>
              </button>
              <button className="buttons__next" onClick={() => onNextClick()}>
                <div className="buttons__next-container">
                  <img
                    className="next-container__image"
                    alt="Next Button"
                    src={next}
                  />
                </div>
              </button>
            </div>
            <button className="player__volume" onClick={this.setVolumeTrack}>
              <div className="player__volume-container">
                <img
                  className="volume-container__image"
                  alt="Volume Button"
                  src={volume}
                />
              </div>
            </button>
          </div>
        )}
      </PlayerContext.Provider>
    );
  };
}
