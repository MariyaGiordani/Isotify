import React, { Component } from 'react';
import ArtistsList from '../../components/artists/ArtistsList/ArtistsList';
import ArtistsGrid from '../../components/artists/ArtistsGrid/ArtistsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/SwitchButton/switchButton';
import './Artists.css';

import mockArtists from '../../mockData/artistsMock';

export default class ArtistsListView extends Component {
  state = {
    isListSelected: false,
    artists: [],
    artistsAmount: 0,
    songsAmount: 0
  };

  changeViewMode = (isListSelected) => this.setState({ isListSelected });

  render = () => {
    const { artists, isListSelected, artistsAmount, songsAmount } = this.state;
    const subtitle = `${artistsAmount} Artists, ${songsAmount} Songs`;

    return (
      <React.Fragment>
        <div className="container artists-view">
          <HeaderLine
            {...{
              title: 'Artists',
              subtitle
            }}
          >
            <SwitchButton
              firstOption="Grid"
              secondOption="List"
              inputFunction={this.changeViewMode}
            />
          </HeaderLine>

          {isListSelected ? (
            <ArtistsList artists={mockArtists} />
          ) : (
            <ArtistsGrid artists={artists} />
          )}
        </div>
      </React.Fragment>
    );
  };
}
