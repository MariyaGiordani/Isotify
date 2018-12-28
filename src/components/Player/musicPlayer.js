import React, { Component } from 'react';

import playlisticon from '../../assets/img/playlisticon.png';
import prev from '../../assets/img/prev.png';
import pause from '../../assets/img/pause.png';
import play from '../../assets/img/play_gray.svg';
import next from '../../assets/img/next.png';
import noMute from '../../assets/img/speaker.svg';
import mute from '../../assets/img/mute.svg';
import { createPopUp } from '../../utils/popUp';

import LoadingBar from '../LoadingBar/loadingBar';
import { ErrorPlayer } from '../../components/Error/errorPlayer';

import transferPlaybackHere from '../../services/transferPlaybackHere';
import { playMusic, playAlbum, playArtist } from '../../services/playMusic';
import './musicPlayer.css';

export const PlayerContext = React.createContext();

const MAX_PROGRESS = 100;
const PERCENTAGE_LOAD = 0.5;

const button = (
  <button className="container__button">
    <div className="container__playlist-icon">
      <img
        className="playlist-icon__image"
        alt="Playlist-icon"
        src={playlisticon}
      />
    </div>
  </button>
);

export class MusicPlayerProvider extends Component {
  state = {
    player: {},
    deviceId: '',
    loggedIn: false,
    error: '',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    albumName: 'Album Name',
    popUp: {},
    playing: false,
    position: 0,
    progress: 0,
    duration: 0,
    isMute: false,
    onPrevClick: () => {},
    onPlayClick: () => {},
    onNextClick: () => {},
    onClickPlayAlbum: () => {},
    onClickPlayTrack: () => {},
    onClickPlayArtist: () => {}
  };

  componentDidMount = () => {
    this.playerCheckInterval = setInterval(
      () => this.checkForPlayer(this.player),
      1000
    );
  };

  createEventHandlers = () => {
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
      getOAuthToken: (OAuthCallBack) => {
        OAuthCallBack(accessToken);
      },
      volume: 0.3
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

    const onClickPlayAlbum = (id, popUp) => {
      const { deviceId } = this.state;
      playAlbum(deviceId, id);
      this.setState({ popUp, playing: true });
    };

    const onClickPlayTrack = (id) => {
      const { deviceId } = this.state;
      playMusic(deviceId, id);
      this.setState({ playing: true });
    };

    const onClickPlayArtist = (id) => {
      const { deviceId } = this.state;
      playArtist(deviceId, id);
      this.setState({ playing: true });
    };

    const updatePlayerProgress = (duration, position) => {
      const { progress } = this.state;
      const initial = (position / duration) * 100;

      const newProgress =
        initial > progress ? initial : progress + PERCENTAGE_LOAD;

      if (newProgress < MAX_PROGRESS) {
        this.setState({ progress: newProgress });
      }
    };

    this.setState({
      onPrevClick,
      onPlayClick,
      onNextClick,
      onClickPlayAlbum,
      onClickPlayTrack,
      onClickPlayArtist,
      updatePlayerProgress
    });
  };
  checkForPlayer = () => {
    const { accessToken } = this.props;
    if (!!window.Spotify && accessToken) {
      this.setState({ loggedIn: true });
      clearInterval(this.playerCheckInterval);

      this.createPlayer(accessToken);
      this.updateStatePlayersFunction();

      this.createEventHandlers();
      this.player.connect();
      this.checkAuthentication();
    }
  };

  checkAuthentication = () => {
    this.player.on('authentication_error', (error) => {
      this.setState({ loggedIn: false, error: true });
    });
  };

  onStateChanged = (state) => {
    if (state !== null) {
      const { current_track: currentTrack } = state.track_window;
      const { position, duration } = state;
      const { previousTrack } = this.state;
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists
        .map((artist) => artist.name)
        .join(', ');

      const clearProgress = () =>
        this.setState({ progress: 0, previousTrack: trackName });

      trackName !== previousTrack && clearProgress();
      const playing = !state.paused;
      const { lastPlaying } = this.state;
      clearInterval(this.playerlInterval);

      !(playing && lastPlaying)
        ? clearInterval(this.playerlInterval)
        : this.initializingBar(state.duration, state.position, playing);

      this.setState({
        position,
        duration,
        trackName,
        albumName,
        artistName,
        playing,
        lastPlaying: playing,
        volume: 0.5,
        isMute: false
      });
    }
  };

  initializingBar = (duration, position, playing) => {
    const { updatePlayerProgress } = this.state;
    const TIMEOUT = Math.floor(duration / (MAX_PROGRESS / PERCENTAGE_LOAD));
    this.barCallBack = () => {
      updatePlayerProgress(duration, position, playing);
    };
    this.playerlInterval = setInterval(this.barCallBack, TIMEOUT);
  };

  muteVolume = () => {
    const { isMute } = this.state;
    this.setState({ isMute: !isMute }, () => {
      this.changeVolume();
    });
  };

  changeVolume = () => {
    const { isMute, volume } = this.state;
    const newVolume = isMute ? 0 : volume;
    this.player.setVolume(newVolume);
  };

  render = () => {
    const {
      trackName,
      artistName,
      onPrevClick,
      onPlayClick,
      onNextClick,
      loggedIn,
      popUp,
      playing,
      progress,
      isMute,
      error
    } = this.state;
    const { children } = this.props;

    return (
      <PlayerContext.Provider value={this.state}>
        {children}
        {loggedIn && (
          <div className="player">
            <LoadingBar progress={progress} type="player" />
            <div className="player__container">
              {popUp ? createPopUp(button, popUp, 'top') : button}
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
                    src={playing ? pause : play}
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
            <button className="player__volume" onClick={this.muteVolume}>
              <div className="player__volume-container">
                <img
                  className="volume-container__image"
                  alt="Volume Button"
                  src={isMute ? mute : noMute}
                />
              </div>
            </button>
          </div>
        )}
        {error && (
          <div className="player">
            <ErrorPlayer
              title={
                'Sorry, your session has expired. Please press the button to refresh the page.'
              }
            />
          </div>
        )}
      </PlayerContext.Provider>
    );
  };
}
