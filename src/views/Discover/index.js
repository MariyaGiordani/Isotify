import React, { Component } from 'react';
import './discover.css';

import { getNewReleases } from '../../services/newReleases';
import { getMultipleArtists } from '../../services/artists';
import { albumsList as parseAlbums } from '../../utils/spotifyResponseParsers';
import { getGlobalTopTracks } from '../../services/playlists';
import {
  parsePlaylistTracks,
  parseArtist
} from '../../utils/spotifyResponseParsers';

import Carousel from '../../components/Carousel/carousel';
import WhatsNew from '../../components/WhatsNew/whatsNew';
import TopSongsAndArtists from '../../components/TopSongsAndArtists/topSongsAndArtists';
import { UserPlaylist } from '../../components/Playlists/userPlaylists';

const filterTopTracks = (artistsTracks) =>
  artistsTracks.map((artist, index) => artistsTracks[index][0]);

const filterRepeated = (idsList) => [...new Set(idsList)];

export default class List extends Component {
  state = {
    albums: [],
    topTracks: [],
    artists: []
  };

  componentDidMount = () => {
    Promise.all([getNewReleases(), getGlobalTopTracks()]).then(
      ([rawAlbums, rawTopTracks]) => {
        const albums = parseAlbums(rawAlbums);
        const topTracks = parsePlaylistTracks(rawTopTracks.tracks.items);
        const topArtists = filterRepeated(
          topTracks.map((track) => track.artist.id)
        );
        getMultipleArtists(topArtists.slice(0, 5)).then((rawArtists) => {
          const artists = rawArtists.map((artist) => parseArtist(artist));
          this.setState({
            artists,
            albums,
            topTracks
          });
        });
      }
    );
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
