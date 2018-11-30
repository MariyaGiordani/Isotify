import React, { Component } from 'react';

import QuarterGrid from '../../components/QuarterGrid/quarterGrid';
import { getResultsSearch } from '../../services/resultsSearch';
import { parseSearch } from '../../utils/spotifyResponseParsers';
import { getQuery } from '../../utils/getQuery';

import './searchResults.css';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';

const titleSongs = 'Songs';
const titleArtists = 'Artists';
const titleAlbums = 'Albums';
const titlePlaylists = 'Playlists';
const subtitle = 'RESULTS';

export default class searchResults extends Component {
  state = {
    artists: [],
    albums: [],
    tracks: [],
    playlists: []
  };

  componentDidMount = () => {
    const query = getQuery();
    getResultsSearch(query).then((response) => {
      const searchData = parseSearch(response);
      this.setState({
        ...searchData
      });
    });
  };

  render = () => {
    console.log(this.state);

    return (
      <div className="container">
        <div className="search-results">
          <div className="search-results__title">Search results for: </div>
          <div className="search-results__wrap">
            <QuarterGrid
              title={titleSongs}
              subtitle={subtitle}
              tracks={this.state.tracks.slice(0, 4)}
            >
              <AlbumsGrid />
            </QuarterGrid>
            <div className="search-results__divider--vertical" />
            <QuarterGrid
              title={titleArtists}
              subtitle={subtitle}
              // artists={this.state.artists.slice(0, 4)}
              // songs={[]}
            />
            <div className="search-results__divider--horizontal" />
            <QuarterGrid
              title={titleAlbums}
              subtitle={subtitle}
              albums={this.state.albums.slice(0, 4)}
            />
            <div className="search-results__divider--vertical" />
            <QuarterGrid title={titlePlaylists} subtitle={subtitle} />
          </div>
        </div>
      </div>
    );
  };
}
