import React, { Component } from 'react';

import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import AlbumsList from '../../components/albums/albumsList/albumsList';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/SwitchButton/switchButton';
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
      .then((response) => {
        const albums = parseSavedAlbums(response.data);
        const albumsAmount = albums.length;
        const songsAmount = albums.reduce(
          (total, currentAlbum) => total + currentAlbum.songsAmount,
          0
        );
        this.setState({ albums });
        this.setState({ albumsAmount });
        this.setState({ songsAmount });
      })
      .catch(() => {
        window.alert('Sorry, we cannot complete your request right now.');
      });
  }

  handleClick = (isListSelected) => this.setState({ isListSelected });

  render = () => {
    const { albums, isListSelected, albumsAmount, songsAmount } = this.state;
    const subtitle = `${albumsAmount} Albums, ${songsAmount} Songs`;

    return (
      <React.Fragment>
        <div className="container albumsView">
          <HeaderLine
            {...{
              title: 'Albums',
              subtitle
            }}
          >
            <SwitchButton firstOption="Grid" secondOption="List" inputFunction={this.handleClick} />
          </HeaderLine>
          {isListSelected ? (
            <AlbumsList albums={albums} />
          ) : (
            <AlbumsGrid size="big" albums={albums} />
          )}
        </div>
      </React.Fragment>
    );
  };
}
