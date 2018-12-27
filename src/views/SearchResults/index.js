import React, { Component } from 'react';

import QuarterGrid from '../../components/QuarterGrid/quarterGrid';
import PageContainer from '../../components/PageContainer/pageContainer';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import Grid from '../../components/Grid/grid';

import { getResultsSearch } from '../../services/resultsSearch';
import { parseSearch } from '../../utils/spotifyResponseParsers';
import { getSongsComponents } from '../../utils/parseToCard';
import { getArtistsComponents } from '../../utils/parseToCard';
import { getPlaylistComponents } from '../../utils/parseToCard';
import { serverError } from '../../utils/errors';

import './searchResults.css';

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
    playlists: [],
    lastQuery: ''
  };

  searchQuery = () => {
    const { lastQuery } = this.state;
    const {
      match: {
        params: { query }
      }
    } = this.props;
    if (lastQuery !== query) {
      getResultsSearch(query)
        .then((response) => {
          const searchData = parseSearch(response);
          this.setState({
            ...searchData
          });
        })
        .catch((error) => {
          this.setState({ error: serverError(error) });
        });
      this.setState({ lastQuery: query });
    }
  };

  componentDidMount = () => {
    this.searchQuery();
  };

  componentDidUpdate = () => {
    this.searchQuery();
  };

  render = () => {
    const { playlists, tracks, albums, artists, lastQuery } = this.state;
    const cardTracks = getSongsComponents(tracks);
    const cardArtists = getArtistsComponents(artists);
    const cardPlaylist = getPlaylistComponents(playlists);
    return (
      <PageContainer>
        <div className="search-results">
          <div className="search-results__title">
            Search results for:
            <div className="search-results__result">{lastQuery}</div>
          </div>
          <div className="search-results__wrap">
            {!!tracks.length && (
              <QuarterGrid
                title={titleSongs}
                subtitle={`${tracks.length} ${subtitle}`}
              >
                <Grid items={cardTracks.slice(0, 4)} size="quarter" />
              </QuarterGrid>
            )}
            <div className="search-results__divider-vertical" />
            {!!artists.length && (
              <QuarterGrid
                title={titleArtists}
                subtitle={`${artists.length} ${subtitle}`}
              >
                <Grid items={cardArtists.slice(0, 4)} size="quarter" />
              </QuarterGrid>
            )}
            <div className="search-results__divider-horizontal" />
            {!!albums.length && (
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
            )}
            <div className="search-results__divider-vertical" />
            {!!playlists.length && (
              <QuarterGrid
                title={titlePlaylists}
                subtitle={`${playlists.length} ${subtitle}`}
              >
                <Grid items={cardPlaylist.slice(0, 4)} size="quarter" />
              </QuarterGrid>
            )}
          </div>
        </div>
      </PageContainer>
    );
  };
}
