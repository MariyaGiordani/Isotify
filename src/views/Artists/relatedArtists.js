import React, { Component } from 'react';
import ArtistsList from '../../components/artists/ArtistsList/ArtistsList';
import ArtistsGrid from '../../components/artists/ArtistsGrid/ArtistsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/SwitchButton/switchButton';
import PageContainer from '../../components/PageContainer/pageContainer';
import { getArtistsWithAlbums } from '../../services/artists';
import { artistsWithAlbums as parseArtists } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../services/errors';
import './Artists.css';

export default class RelatedArtistsView extends Component {
  state = {
    isListSelected: false,
    artists: [],
    artistsAmount: 0,
    songsAmount: 0
  };

  fetchArtistData(artists) {
    getArtistsWithAlbums(artists)
      .then((response) => {
        const artists = parseArtists(response);

        const songsAmount = artists.reduce(
          (total, currentArtist) => total + currentArtist.totalTracks,
          0
        );

        this.setState({
          artists,
          songsAmount,
          artistsAmount: artists.length
        });
      })
      .catch((error) => {
        window.alert('Sorry, we cannot complete your request right now.');
        serverError(error);
      });
  }

  getCurrentArtistId = () => this.props.match.params.artistsIds;

  componentDidUpdate = (prevProps) => {
    const artistsId = this.getCurrentArtistId();
    if (prevProps.match.params.artistId !== artistsId) {
      console.log('didupdate aimeupai');

      //this.fetchArtistData(artistsId);
    }
  };

  componentDidMount = () => {
    const artistsId = this.getCurrentArtistId();

    this.fetchArtistData(artistsId);
  };

  changeViewMode = (isListSelected) => this.setState({ isListSelected });

  render = () => {
    const { artists, isListSelected, artistsAmount, songsAmount } = this.state;
    const subtitle = `${artistsAmount} Artists, ${songsAmount} Songs`;

    return (
      <PageContainer>
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
          <ArtistsGrid artists={artists} size={'big'} />
        )}
      </PageContainer>
    );
  };
}
