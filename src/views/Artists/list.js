import React, { Component } from 'react';
import ArtistsList from '../../components/artists/ArtistsList/ArtistsList';
import ArtistsGrid from '../../components/artists/ArtistsGrid/ArtistsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/SwitchButton/switchButton';
import PageContainer from '../../components/PageContainer/pageContainer';
import { getTopArtistsWithAlbums } from '../../services/artists';
import { artistsWithAlbums as parseTopArtists } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../utils/errors';
import BottomScrollListener from 'react-bottom-scroll-listener';

import './Artists.css';

export default class ArtistsListView extends Component {
  state = {
    isListSelected: false,
    artists: [],
    artistsAmount: 0,
    songsAmount: 0,
    error: '',
    loaded: false,
    next: ''
  };

  componentDidMount() {
    this.loadArtists();
  }

  loadArtists = () => {
    const { next, artistsAmount, artists } = this.state;
    getTopArtistsWithAlbums(next)
      .then(({ items, next }) => {
        const parsedArtists = parseTopArtists(items).filter(
          (artist) => artist.albums.length > 0
        );

        const totalTracks = parsedArtists.reduce(
          (total, currentArtist) => total + currentArtist.totalTracks,
          0
        );

        this.setState({
          songsAmount: totalTracks,
          artists: artists.concat(parsedArtists),
          artistsAmount: artistsAmount + parsedArtists.length,
          loaded: true,
          next
        });
      })
      .catch((error) => {
        this.setState({ error: serverError(error) });
      });
  };

  changeViewMode = (isListSelected) => this.setState({ isListSelected });

  render = () => {
    const {
      artists,
      isListSelected,
      artistsAmount,
      songsAmount,
      error,
      loaded,
      next
    } = this.state;
    const subtitle = `${artistsAmount} Artists, ${songsAmount} Songs`;

    return (
      <PageContainer {...{ error, loaded }}>
        <HeaderLine
          {...{
            title: 'Artists',
            subtitle,
            size: 'big'
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
          <ArtistsGrid artists={artists} size={'big'} />
        )}
        {next && (
          <BottomScrollListener
            onBottom={() => {
              this.loadArtists();
            }}
          />
        )}
      </PageContainer>
    );
  };
}
