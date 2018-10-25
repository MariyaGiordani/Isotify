import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/sidebar';
import ArtistsList from '../../components/artists/ArtistsList/ArtistsList';
import ArtistsGrid from '../../components/artists/ArtistsGrid/ArtistsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/buttons/switchButton/switchButton';
import './Artists.css';

export default class ArtistsListView extends Component {
  state = {
    isListSelected: false,
    artists: [],
    artistsAmount: 0,
    songsAmount: 0
  };

  handleClick = (isListSelected) => this.setState({ isListSelected });

  render = () => {
    const { artists, isListSelected, artistsAmount, songsAmount } = this.state;
    const subtitle = `${artistsAmount} Artists, ${songsAmount} Songs`;

    return (
      <React.Fragment>
        <Sidebar />
        <div className="container artistsView">
          <HeaderLine
            {...{
              title: 'Artists',
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
            <ArtistsList artists={artists} />
          ) : (
            <ArtistsGrid artists={artists} />
          )}
        </div>
      </React.Fragment>
    );
  };
}
