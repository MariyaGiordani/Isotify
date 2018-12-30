import React, { Component } from 'react';

import QuarterGrid from '../../components/QuarterGrid/quarterGrid';
import PageContainer from '../../components/PageContainer/pageContainer';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import Grid from '../../components/Grid/grid';
import NotFoundSearch from '../../components/NotFoundSearch/notFoundSearch';

import { getResultsSearch } from '../../services/resultsSearch';
import { parseSearch } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../utils/errors';

import './searchResults.css';
import PlaylistCard from '../../components/Card/playlistCard';
import TrackCard from '../../components/Card/trackCard';
import ArtistCard from '../../components/Card/artistCard';

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
    lastQuery: '',
    loaded: false
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
            ...searchData,
            loaded: true
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
    const {
      playlists,
      tracks,
      albums,
      artists,
      lastQuery,
      loaded,
      error
    } = this.state;
    const totalLength =
      tracks.length + artists.length + albums.length + playlists.length;

    return (
      <PageContainer {...{ error, loaded }}>
        <div className="search-results">
          <div className="search-results__title">
            Search results for:
            <div className="search-results__result">{lastQuery}</div>
          </div>
          {totalLength > 0 ? (
            <div className="search-results__wrap">
              <QuarterGrid
                title={titleSongs}
                subtitle={`${tracks.length} ${subtitle}`}
                length={tracks.length}
              >
                {!!tracks.length ? (
                  <Grid size="quarter">
                    {tracks.slice(0, 4).map((track) => (
                      <TrackCard {...{ ...track, size: 'quarter' }} />
                    ))}
                  </Grid>
                ) : (
                  <NotFoundSearch item="songs" />
                )}
              </QuarterGrid>
              <div className="search-results__divider-vertical" />
              <QuarterGrid
                title={titleArtists}
                subtitle={`${artists.length} ${subtitle}`}
                length={artists.length}
              >
                {!!artists.length ? (
                  <Grid size="quarter">
                    {artists.slice(0, 4).map((artist) => (
                      <ArtistCard {...{ ...artist, size: 'quarter' }} />
                    ))}
                  </Grid>
                ) : (
                  <NotFoundSearch item="artists" />
                )}
              </QuarterGrid>
              <div className="search-results__divider-horizontal" />
              <QuarterGrid
                title={titleAlbums}
                subtitle={`${albums.length} ${subtitle}`}
                length={albums.length}
              >
                {!!albums.length ? (
                  <AlbumsGrid
                    albums={albums.slice(0, 4)}
                    size="quarter"
                    gridSize="quarter"
                  />
                ) : (
                  <NotFoundSearch item="albums" />
                )}
              </QuarterGrid>
              <div className="search-results__divider-vertical" />
              <QuarterGrid
                title={titlePlaylists}
                subtitle={`${playlists.length} ${subtitle}`}
                length={playlists.length}
              >
                {!!playlists.length ? (
                  <Grid size="quarter">
                    {playlists.slice(0, 4).map((playlist) => (
                      <PlaylistCard {...{ ...playlist, size: 'quarter' }} />
                    ))}
                  </Grid>
                ) : (
                  <NotFoundSearch item="playlist" />
                )}
              </QuarterGrid>
            </div>
          ) : (
            <NotFoundSearch item="search" />
          )}
        </div>
      </PageContainer>
    );
  };
}
