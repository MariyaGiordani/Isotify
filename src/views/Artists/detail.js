import React, { Fragment, Component } from 'react';
import BannerArtist from '../../components/BannerArtist/bannerArtist';
import ArtistNavigation from '../../components/ArtistNavigation/artistNavigation';
// import ArtistNavigationItems from '../../components/ArtistNavigationItems/artistNavigationItems';
// import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import { getArtist } from '../../services/artists';
import { artistWithAlbumsAndRelated as parseArtist } from '../../utils/spotifyResponseParsers';
import { Redirect } from 'react-router-dom';

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
    getArtist(artistId)
      .then((response) => {
        const artist = parseArtist(response);
        this.setState({
          name: artist.name,
          albums: artist.albums,
          songsAmount: artist.totalTracks,
          relatedArtists: artist.relatedArtists,
          albumsAmount: artist.albums.length,
          imgSrc: artist.imgSrc
        });
      })
      .catch(() => {
        //window.location.assign('/404');
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
    console.log(artistId);
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
      <Fragment>
        <div className="container">
          <BannerArtist
            name={name}
            albumsAmount={albumsAmount}
            songsAmount={songsAmount}
            relatedArtists={relatedArtists}
            imgSrc={imgSrc}
          />
          <ArtistNavigation
            name={name}
            albums={albums}
            albumsAmount={albumsAmount}
            songsAmount={songsAmount}
          />

          {/* <ArtistNavigationItems />
          <div className="artists-view__wrap">
            <AlbumsGrid albums={albums} size="big" />
          </div> */}
        </div>
      </Fragment>
    );
  };
}
