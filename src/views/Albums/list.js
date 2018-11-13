import React, { Component, Fragment } from 'react';

import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import { getSavedAlbums } from '../../services/albums';
import { savedAlbums as parseSavedAlbums } from '../../utils/spotifyResponseParsers';
import './albums.css';

export default class Albums extends Component {
  state = {
    isListSelected: false,
    albums: [],
    albumsAmount: 0,
    songsAmount: 0
  };

  componentDidMount() {
    getSavedAlbums()
      .then((rawAlbums) => {
        const albums = parseSavedAlbums(rawAlbums);
        const albumsAmount = albums.length;
        const songsAmount = albums.reduce((total, currentAlbum) => total + currentAlbum.songsAmount, 0);
        this.setState({ albums, albumsAmount, songsAmount });
      })
      .catch(() => {
        window.alert('Sorry, we cannot complete your request right now.');
      });
  }

  handleClick = (isListSelected) => this.setState({ isListSelected });

  render = () => {
    const { albums, albumsAmount, songsAmount } = this.state;
    const subtitle = `${albumsAmount} Albums, ${songsAmount} Songs`;

    return (
      <Fragment>
        <div className="container albums-view">
          <HeaderLine
            {...{
              title: 'Albums',
              subtitle
            }}
          />
          <AlbumsGrid size="big" albums={albums} />
        </div>
      </Fragment>
    );
  };
}
