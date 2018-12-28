import React, { Component } from 'react';
import ArtistsList from '../../components/artists/ArtistsList/ArtistsList';
import ArtistsGrid from '../../components/artists/ArtistsGrid/ArtistsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/SwitchButton/switchButton';
import PageContainer from '../../components/PageContainer/pageContainer';

import { getArtistsWithAlbums } from '../../services/artists';
import { artistsWithAlbums as parseArtists } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../utils/errors';
import './Artists.css';

export default class RelatedArtistsView extends Component {
  state = {
    isListSelected: false,
    artists: [],
    artistsAmount: 0,
    songsAmount: 0,
    error: '',
    loaded: false
  };

  fetchArtistData = (artists) => {
    getArtistsWithAlbums(artists)
      .then(({ items }) => {
        const artists = parseArtists(items);
        const songsAmount = artists.reduce(
          (total, currentArtist) => total + currentArtist.totalTracks,
          0
        );

        this.setState({
          artists,
          songsAmount,
          artistsAmount: artists.length,
          loaded: true
        });
      })
      .catch((error) => {
        this.setState({ error: serverError(error) });
      });
  };

  getCurrentArtistId = () => this.props.match.params.artistsIds;

  componentDidMount = () => {
    const artistsId = this.getCurrentArtistId();

    this.fetchArtistData(artistsId);
  };

  changeViewMode = (isListSelected) => this.setState({ isListSelected });

  render = () => {
    const {
      artists,
      isListSelected,
      artistsAmount,
      songsAmount,
      error,
      loaded
    } = this.state;
    const subtitle = `${artistsAmount} Artists, ${songsAmount} Songs`;

    return (
      <PageContainer {...{ error, loaded }}>
        <HeaderLine
          {...{
            title: 'Related Artists',
            subtitle
          }}
        >
          <SwitchButton
            {...{
              firstOption: 'Grid',
              secondOption: 'List',
              inputFunction: this.changeViewMode
            }}
          />
        </HeaderLine>
        {isListSelected ? (
          <ArtistsList {...{ artists }} />
        ) : (
          <ArtistsGrid {...{ size: 'big', ...{ artists } }} size={'big'} />
        )}
      </PageContainer>
    );
  };
}
