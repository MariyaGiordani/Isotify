import React, { Component } from 'react';

import QuarterGrid from '../../components/QuarterGrid/quarterGrid';
import PageContainer from '../../components/PageContainer/pageContainer';
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
      const searchData = parseSearch(response);
      this.setState({
        ...searchData
      });
    });
  };

  render = () => {
    const { playlists, tracks, albums, artists } = this.state;

    return (
      <PageContainer>
        <div className="search-results">
          <div className="search-results__title">Search results for: </div>
          <div className="search-results__wrap">
            {!!tracks.length && (
              <QuarterGrid
                title={titleSongs}
                subtitle={`${tracks.length} ${subtitle}`}
              >
                <TracksGrid
                  tracks={tracks.slice(0, 4)}
                  size="quarter"
                  gridSize="quarter"
                />
              </QuarterGrid>
            )}
            <div className="search-results__divider--vertical" />
            <QuarterGrid
              title={titleArtists}
              subtitle={`${artists.length} ${subtitle}`}
            >
              <ArtistsGrid
                artists={artists.slice(0, 4)}
                size="quarter"
                gridSize="quarter"
              />
            </QuarterGrid>
            <div className="search-results__divider--horizontal" />
            <QuarterGrid
              title={titleAlbums}
              subtitle={`${albums.length} ${subtitle}`}
            >
              <AlbumsGrid
                albums={albums.slice(0, 4)}
                size="quarter"
                gridSize="quarter"
              />
            </QuarterGrid>
            <div className="search-results__divider--vertical" />
            <QuarterGrid
              title={titlePlaylists}
              subtitle={`${playlists.length} ${subtitle}`}
            >
              <PlaylistGrid
                playlists={playlists.slice(0, 4)}
                size="quarter"
                gridSize="quarter"
              />
            </QuarterGrid>
          </div>
        </div>
      </PageContainer>
    );
  };
}
