import React, { Fragment, Component } from 'react';
import './discover.css';

import Carousel from '../../components/Carousel/carousel';
import { getNewReleases } from '../../services/newReleases';
import { albumsList as parseAlbums } from '../../utils/spotifyResponseParsers';

export default class List extends Component {
  state = {
    carouselArtists: [],
    albums: []
  };

  componentDidMount = () => {
    getNewReleases().then((rawAlbums) => {
      const albums = parseAlbums(rawAlbums);
      const carouselArtists = albums.map((album) => ({
        name: album.artist.name,
        imgSrc: album.imgSrc,
        id: album.id
      }));
      this.setState({
        carouselArtists: carouselArtists
      });
    });
  };

  render = () => {
    console.log(this.state.carouselArtists, 'artists');
    return (
      <Fragment>
        <div className="container">
          <Carousel items={this.state.carouselArtists} />
        </div>
      </Fragment>
    );
  };
}
