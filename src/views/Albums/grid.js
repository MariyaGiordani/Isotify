import React, { Component } from 'react';
import AlbumsGrid from '../../components/albumsGrid/albumsGrid';
import Sidebar from '../../components/Sidebar/sidebar';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/buttons/switchButton/switchButton';
import './albums.css';

class Albums extends Component {
  state = {
    isListSelected: false,
    albums: [],
    albumsAmount: '0',
    songsAmount: '0'
  };

  handleClick = (isListSelected) => {
    this.setState({ isListSelected });
  };

  render = () => {
    const { albums, isListSelected, albumsAmount, songsAmount } = this.state;
    const subtitle = `${albumsAmount} Albums, ${songsAmount} Songs`;

    return (
      <div>
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
          {!isListSelected ? (
            <AlbumsGrid size="big" albums={albums} />
          ) : (
            <AlbumsGrid size="small" albums={albums} />
          )}
        </div>
      </div>
    );
  };
}

export default Albums;
