import React, { Component } from 'react';

import playlisticon from '../../assets/img/playlisticon.png';
import prev from '../../assets/img/prev.png';
import pause from '../../assets/img/pause.png';
import next from '../../assets/img/next.png';
import volume from '../../assets/img/speaker.png';

import transferPlaybackHere from '../../services/transferPlaybackHere';

import './musicPlayer.css';
let player = {};
const Context = React.createContext();
class MusicPlayer extends Component {
  state = {
    deviceId: '',
    loggedIn: true,
    error: '',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    albumName: 'Album Name',
    playing: false,
    position: 0,
    duration: 0,
    player: {}
  };

  componentDidMount = () => {
    this.playerCheckInterval = setInterval(
      () => this.checkForPlayer(player),
      1000
    );
  };

  createEventHandlers = () => {
    const { deviceId } = this.state;
    console.log(player);
    player.on('initialization_error', (e) => {
      console.error('1', e);
    });
    player.on('account_error', (e) => {
      console.error('2', e);
    });
    player.on('playback_error', (e) => {
      console.error('3', e);
    });

    // Playback status updates
    player.on('player_state_changed', (state) => {
      this.onStateChanged(state);
    });

    // Ready
    player.on('ready', (data) => {
      let { device_id } = data;
      this.setState({ deviceId: device_id });
      transferPlaybackHere(deviceId);
    });
  };

  checkForPlayer = () => {
    if (window.Spotify !== null) {
      clearInterval(this.playerCheckInterval);

      player = new window.Spotify.Player({
        name: 'Isotify - EMA',
        getOAuthToken: (cb) => {
          cb(localStorage.access_token);
        }
      });
      this.createEventHandlers();
      // finally, connect!
      player.connect();
    }
  };

  onStateChanged = (state) => {
    // if we're no longer listening to music, we'll get a null state.
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
        playing
      });
    }
  };

  setVolumeTrack = () => {
    player.getVolume().then((volume) => {
      let volume_percentage = volume * 0.1;
      console.log(`The volume of the player is ${volume_percentage * 1000}%`);
      player.setVolume(volume_percentage).then(() => {
        console.log('Volume updated!');
      });
    });
  };

  onPrevClick() {
    player.previousTrack();
  }

  onPlayClick() {
    player.togglePlay();
  }

  onNextClick() {
    player.nextTrack();
  }

  onVolumeClick = () => player.setVolumeTrack();

  render = () => {
    const { trackName, artistName } = this.state;
    return (
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
          <button className="buttons__prev" onClick={this.onPrevClick}>
            <div className="buttons__prev-container">
              <img
                className="prev-container__image"
                alt="Prev Button"
                src={prev}
              />
            </div>
          </button>
          <button className="buttons__pause" onClick={this.onPlayClick}>
            <div className="buttons__pause-container">
              <img
                className="pause-container__image"
                alt="Pause Button"
                src={pause}
              />
            </div>
          </button>
          <button className="buttons__next" onClick={this.onNextClick}>
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
    );
  };
}

export default MusicPlayer;
