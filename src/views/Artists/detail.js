import React, { Component } from 'react';
import BannerArtist from '../../components/BannerArtist/bannerArtist';
import HeaderLine from '../../components/headerLine/headerLine';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import PageContainer from '../../components/PageContainer/pageContainer';

import { getArtist } from '../../services/artists';
import { artistWithAlbumsAndRelated as parseArtist } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../utils/errors';

export default class Details extends Component {
  state = {
    name: '',
    albums: [],
    albumsAmount: 0,
    songsAmount: 0,
    relatedArtists: [],
    imgSrc: '',
    error: '',
    loaded: false
  };

  fetchArtistData(artistId) {
    getArtist(artistId)
      .then((response) => {
        const artist = parseArtist(response);
        this.setState({
          name: artist.name,
          albums: artist.albums,
          songsAmount: artist.totalTracks,
          relatedArtists: artist.relatedArtists,
          albumsAmount: artist.albums.length,
          imgSrc: artist.imgSrc,
          loaded: true
        });
      })
      .catch((error) => {
        this.setState({ error: serverError(error) });
      });
  }

  getCurrentArtistId = () => this.props.match.params.artistId;

  componentDidUpdate(prevProps) {
    const artistId = this.getCurrentArtistId();
    if (prevProps.match.params.artistId !== artistId) {
      this.fetchArtistData(artistId);
    }
  }

  componentDidMount() {
    const artistId = this.getCurrentArtistId();
    this.fetchArtistData(artistId);
  }

  render = () => {
    const {
      name,
      albums,
      songsAmount,
      albumsAmount,
      relatedArtists,
      imgSrc,
      error,
      loaded
    } = this.state;

    return (
      <PageContainer {...{ error, loaded, noPadding: true }}>
        <BannerArtist
          {...{
            name,
            albumsAmount,
            songsAmount,
            relatedArtists,
            imgSrc
          }}
        />
        <HeaderLine
          {...{
            title: 'Albums',
            size: 'big'
          }}
        />

        <div className="artists-view__wrap">
          <AlbumsGrid {...{ albums, size: 'big' }} />
        </div>
      </PageContainer>
    );
  };
}
