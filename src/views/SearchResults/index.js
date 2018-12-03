import React, { Component } from 'react';

import QuarterGrid from '../../components/QuarterGrid/quarterGrid';
import { getResultsSearch } from '../../services/resultsSearch';
import { parseSearch } from '../../utils/spotifyResponseParsers';
import { getQuery } from '../../utils/getQuery';

import './searchResults.css';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import TracksGrid from '../../components/albums/TracksGrid/tracksGrid';
import ArtistsGrid from '../../components/artists/ArtistsGrid/ArtistsGrid';
import PlaylistGrid from '../../components/PlaylistGrid/playlistGrid';

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
      console.log(response);

      const searchData = parseSearch(response);
      // console.log(response);

      this.setState({
        ...searchData
      });
    });
  };

  render = () => {
    const { playlists } = this.state;

    return (
      <div className="container">
        <div className="search-results">
          <div className="search-results__title">Search results for: </div>
          <div className="search-results__wrap">
            <QuarterGrid title={titleSongs} subtitle={subtitle}>
              <TracksGrid
                tracks={this.state.tracks.slice(0, 4)}
                size="quarter"
                gridSize="quarter"
              />
            </QuarterGrid>
            <div className="search-results__divider--vertical" />
            <QuarterGrid title={titleArtists} subtitle={subtitle}>
              <ArtistsGrid
                artists={this.state.artists.slice(0, 4)}
                size="quarter"
                gridSize="quarter"
              />
            </QuarterGrid>
            <div className="search-results__divider--horizontal" />
            <QuarterGrid title={titleAlbums} subtitle={subtitle}>
              <AlbumsGrid
                albums={this.state.albums.slice(0, 4)}
                size="quarter"
                gridSize="quarter"
              />
            </QuarterGrid>
            {/* <div className="search-results__divider--vertical" />
            <QuarterGrid
              title={titlePlaylists}
              subtitle={`${playlists.length} ${subtitle}`}
            >
              <PlaylistGrid
                playlists={this.state.playlists.slice(0, 4)}
                size="quarter"
                gridSize="quarter"
              />
            </QuarterGrid> */}
          </div>
        </div>
      </div>
    );
  };
}
