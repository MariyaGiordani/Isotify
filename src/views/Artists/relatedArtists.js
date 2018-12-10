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
    console.log(123, artists);
    // getArtistsWithAlbums(artists)
    //   .then((response) => {
    //     const artists = parseArtists(response);
    //     this.setState({
    //       artists
    //     });
    //   })
    //   .catch((error) => {
    //     window.alert('Sorry, we cannot complete your request right now.');
    //     console.log(error);
    //     serverError(error);
    //   });
  }

  getCurrentArtistId = () => this.props.match.params.artistsId;

  componentDidUpdate = (prevProps) => {
    const artistsId = this.getCurrentArtistId();
    if (prevProps.match.params.artistId !== artistsId) {
      this.fetchArtistData(artistsId);
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
        aaaaaaaaaaaaaaaaaaaaaa
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
        {/* {isListSelected ? (
          <ArtistsList artists={artists} />
        ) : (
          <ArtistsGrid artists={artists} size={'big'} />
        )} */}
      </PageContainer>
    );
  };
}
