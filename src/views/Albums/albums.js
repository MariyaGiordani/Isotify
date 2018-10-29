import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import AlbumsList from '../../components/albums/albumsList/albumsList';
import Sidebar from '../../components/Sidebar/sidebar';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/SwitchButton/switchButton';
import './albums.css';
const access_token_storage = localStorage.getItem('access_token');
const userId = localStorage.getItem('userId');

export default class Albums extends Component {
  state = {
    isListSelected: false,
    albums: [],
    albumsAmount: 0,
    songsAmount: 0
  };

  handleClick = (isListSelected) => this.setState({ isListSelected });

  render = () => {
    if (access_token_storage && userId) {
      const { albums, isListSelected, albumsAmount, songsAmount } = this.state;
      const subtitle = `${albumsAmount} Albums, ${songsAmount} Songs`;

      return (
        <React.Fragment>
          <Sidebar />
          <div className="container albumsView">
            <HeaderLine
              {...{
                title: 'Albums',
                subtitle
              }}
            >
              <SwitchButton
                firstOption="Grid"
                secondOption="List"
                inputFunction={this.handleClick}
              />
            </HeaderLine>
            {isListSelected ? (
              <AlbumsList albums={albums} />
            ) : (
              <AlbumsGrid size="big" albums={albums} />
            )}
          </div>
        </React.Fragment>
      );
    } else {
      return <Redirect to="/login" />;
    }
  };
}
