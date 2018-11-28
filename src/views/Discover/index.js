import React, { Component } from 'react';
import './discover.css';

import { getNewReleases } from '../../services/newReleases';
import { albumsList as parseAlbums } from '../../utils/spotifyResponseParsers';
import WhatsNew from '../../components/WhatsNew/whatsNew';
import TopSongsAndArtists from '../../components/TopSongsAndArtists/topSongsAndArtists';

export default class List extends Component {
  state = {
    carouselArtists: [],
    albums: []
  };

  componentDidMount = () => {
    getNewReleases().then((rawAlbums) => {
      const albums = parseAlbums(rawAlbums);
      const carouselArtists = albums.map(
        ({ artist: { name }, imgSrc, id }) => ({
          name,
          imgSrc,
          id
        })
      );
      this.setState({
        carouselArtists,
        albums
      });
    });
  };

  render = () => {
    return (
      <div className="discover container">
        <WhatsNew albums={this.state.albums.slice(0, 4)} />
        <div className="discover__top">
          <TopSongsAndArtists
            artists={this.state.carouselArtists.slice(0, 4)}
            songs={[]}
          />
        </div>
        <div className="discover__divider" />
      </div>
    );
  };
}
