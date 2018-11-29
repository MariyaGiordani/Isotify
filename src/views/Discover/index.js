import React, { Component } from 'react';
import './discover.css';

import { getNewReleases } from '../../services/newReleases';
import { getMultipleArtistsTopTracks } from '../../services/tracks';
import { getMultipleArtists } from '../../services/artists';
import { albumsList as parseAlbums } from '../../utils/spotifyResponseParsers';
import {
  parseArtistTopTracks as parseTracks,
  parseArtist
} from '../../utils/spotifyResponseParsers';

import Carousel from '../../components/Carousel/carousel';
import WhatsNew from '../../components/WhatsNew/whatsNew';
import TopSongsAndArtists from '../../components/TopSongsAndArtists/topSongsAndArtists';
import { UserPlaylist } from '../../components/Playlists/userPlaylists';

const filterTopTracks = (artistsTracks) =>
  artistsTracks.map((artist, index) => artistsTracks[index][0]);

export default class List extends Component {
  state = {
    albums: [],
    topTracks: [],
    artists: []
  };

  componentDidMount = () => {
    getNewReleases().then((rawAlbums) => {
      const albums = parseAlbums(rawAlbums);
      const newReleasesArtistsIds = albums.map(({ artist: { id } }) => id);

      Promise.all([
        getMultipleArtistsTopTracks(newReleasesArtistsIds),
        getMultipleArtists(newReleasesArtistsIds)
      ]).then(([rawTopTracks, rawArtists]) => {
        const topArtistsTracks = rawTopTracks.map((artist) =>
          parseTracks(artist)
        );
        const topTracks = filterTopTracks(topArtistsTracks);
        const artists = rawArtists.map((artist) => parseArtist(artist));

        this.setState({
          albums,
          artists,
          topTracks
        });
      });
    });
  };

  render = () => {
    const { artists = [], albums = [], topTracks = [] } = this.state;
    return (
      <div className="container">
        <Carousel items={artists} />
        <div className="discover">
          <WhatsNew albums={albums.slice(0, 4)} />
          <div className="discover__top">
            <TopSongsAndArtists artists={artists} songs={topTracks} />
          </div>
          <div className="discover__divider" />
        </div>
        <UserPlaylist />
      </div>
    );
  };
}
