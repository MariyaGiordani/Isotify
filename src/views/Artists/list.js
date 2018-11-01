import React, { Component } from 'react';
import ArtistsList from '../../components/artists/ArtistsList/ArtistsList';
import ArtistsGrid from '../../components/artists/ArtistsGrid/ArtistsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/SwitchButton/switchButton';
import { getTopArtistsWithAlbums } from '../../services/artists';
import { topArtistsWithAlbums as parseTopArtists } from '../../utils/spotifyReponseParsers';
import './Artists.css';
import { parse } from 'querystring';

export default class ArtistsListView extends Component {
  state = {
    isListSelected: false,
    artists: [],
    artistsAmount: 0,
    songsAmount: 0
  };

  componentDidMount() {
    getTopArtistsWithAlbums().then((artists) => {
      console.log(artists);
      let parsedArtists = parseTopArtists(artists);
      parsedArtists = parsedArtists.filter(
        (artist) => artist.albums.length > 0
      );

      const totalTracks = parsedArtists.reduce(
        (total, currentArtist) => total + currentArtist.totalTracks,
        0
      );

      this.setState({ songsAmount: totalTracks });
      this.setState({ artists: parsedArtists });
      this.setState({ artistsAmount: parsedArtists.length });
    });
  }

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
            <ArtistsList artists={artists} />
          ) : (
            <ArtistsGrid artists={artists} />
          )}
        </div>
      </React.Fragment>
    );
  };
}
