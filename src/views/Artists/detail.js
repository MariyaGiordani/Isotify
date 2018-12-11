import React, { Component } from 'react';
import BannerArtist from '../../components/BannerArtist/bannerArtist';
import ArtistNavigationItems from '../../components/ArtistNavigationItems/artistNavigationItems';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import PageContainer from '../../components/PageContainer/pageContainer';
import { getArtist } from '../../services/artists';
import { artistWithAlbumsAndRelated as parseArtist } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../services/errors';
import { errorHandler } from '../../components/Error/errorHandler';

export default class Details extends Component {
  state = {
    name: '',
    albums: [],
    albumsAmount: 0,
    songsAmount: 0,
    relatedArtists: [],
    imgSrc: ''
  };

  fetchArtistData(artistId) {
    getArtist(artistId).then((response) => {
      const artist = parseArtist(response);
      this.setState({
        name: artist.name,
        albums: artist.albums,
        songsAmount: artist.totalTracks,
        relatedArtists: artist.relatedArtists,
        albumsAmount: artist.albums.length,
        imgSrc: artist.imgSrc
      });
    });
    // .catch((error) => {
    //   window.alert('Sorry, we cannot complete your request right now.');
    //   serverError(error);
    // });
  }
  componentDidCatch(error) {
    errorHandler(true);
    serverError(error);
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
      imgSrc
    } = this.state;
    return (
      <PageContainer noPadding={true}>
        <BannerArtist
          {...{
            name,
            albumsAmount,
            songsAmount,
            relatedArtists,
            imgSrc
          }}
        />
        <ArtistNavigationItems />
        <div className="artists-view__wrap">
          <AlbumsGrid {...{ albums, size: 'big' }} />
        </div>
      </PageContainer>
    );
  };
}
