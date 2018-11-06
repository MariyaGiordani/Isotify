import React, { Fragment, Component } from 'react';
import BannerArtist from '../../components/BannerArtist/bannerArtist';
import ArtistNavigationItems from '../../components/ArtistNavigationItems/artistNavigationItems';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import { getArtist } from '../../services/artists';
import { artistWithAlbumsAndRelated as parseArtist } from '../../utils/spotifyReponseParsers';
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

  componentDidMount() {
    const artistId = this.props.match.params.artistId;

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
        window.location.assign('/404');
      });
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
            albums={albums}
            albumsAmount={albumsAmount}
            songsAmount={songsAmount}
            relatedArtists={relatedArtists}
            imgSrc={imgSrc}
          />
          <ArtistNavigationItems />
          <div className="artists-view__wrap">
            <AlbumsGrid />
          </div>
        </div>
      </Fragment>
    );
  };
}
