import React, { Component } from 'react';
import './discover.css';

import { getNewReleases } from '../../services/newReleases';
import { albumsList as parseAlbums } from '../../utils/spotifyResponseParsers';
import WhatsNew from '../../components/WhatsNew/whatsNew';

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
        carouselArtists: carouselArtists,
        albums
      });
    });
  };

  render = () => {
    return (
      <div className="container">
        <WhatsNew albums={this.state.albums.slice(0, 4)} />
      </div>
    );
  };
}
