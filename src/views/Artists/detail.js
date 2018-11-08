import React, { Fragment, Component } from 'react';
import BannerArtist from '../../components/BannerArtist/bannerArtist';
import ArtistNavigationItems from '../../components/ArtistNavigationItems/artistNavigationItems';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';

export default class Details extends Component {
  state = {
    name: '',
    albums: [],
    albumsAmount: 0,
    songsAmount: 0,
    relatedArtists: []
  };

  render = () => {
    const {
      name,
      albums,
      songsAmount,
      albumsAmount,
      relatedArtists
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
