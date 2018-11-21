import React, { Component } from 'react';
import ArtistsList from '../../components/artists/ArtistsList/ArtistsList';
import ArtistsGrid from '../../components/artists/ArtistsGrid/ArtistsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/SwitchButton/switchButton';
import PageContainer from '../../components/PageContainer/pageContainer';
import { getTopArtistsWithAlbums } from '../../services/artists';
import { topArtistsWithAlbums as parseTopArtists } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../services/errors';
import './Artists.css';

export default class ArtistsListView extends Component {
  state = {
    isListSelected: false,
    artists: [],
    artistsAmount: 0,
    songsAmount: 0
  };

  componentDidMount() {
    getTopArtistsWithAlbums()
      .then((artists) => {
        const parsedArtists = parseTopArtists(artists).filter((artist) => artist.albums.length > 0);

        const totalTracks = parsedArtists.reduce(
          (total, currentArtist) => total + currentArtist.totalTracks,
          0
        );

        this.setState({
          songsAmount: totalTracks,
          artists: parsedArtists,
          artistsAmount: parsedArtists.length
        });
      })
      .catch((error) => {
        window.alert('Sorry, we cannot complete your request right now.');
        serverError(error);
      });
  }

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
          <SwitchButton firstOption="Grid" secondOption="List" inputFunction={this.changeViewMode} />
        </HeaderLine>

        {isListSelected ? <ArtistsList artists={artists} /> : <ArtistsGrid artists={artists} size={'big'} />}
      </PageContainer>
    );
  };
}
