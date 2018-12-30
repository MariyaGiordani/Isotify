import React, { Component } from 'react';

import AlbumsGrid from '../../components/Grid/albumsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import PageContainer from '../../components/PageContainer/pageContainer';
import { getSavedAlbums } from '../../services/albums';
import { savedAlbums as parseSavedAlbums } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../utils/errors';
import BottomScrollListener from 'react-bottom-scroll-listener';
import './albums.css';

export default class Albums extends Component {
  state = {
    albums: [],
    albumsAmount: 0,
    songsAmount: 0,
    error: '',
    loaded: false,
    next: ''
  };

  componentDidMount() {
    this.loadAlbums();
  }

  loadAlbums = () => {
    const { next, albums } = this.state;
    getSavedAlbums(next)
      .then(({ items, next }) => {
        const newAlbums = parseSavedAlbums(items);
        const albumsAmount = newAlbums.length;
        const songsAmount = newAlbums.reduce(
          (total, currentAlbum) => total + currentAlbum.songsAmount,
          0
        );
        this.setState({
          albums: albums.concat(newAlbums),
          albumsAmount,
          songsAmount,
          loaded: true,
          next: next
        });
      })
      .catch((error) => {
        this.setState({ error: serverError(error) });
      });
  };

  render = () => {
    const {
      albums,
      albumsAmount,
      songsAmount,
      error,
      loaded,
      next
    } = this.state;
    const subtitle = `${albumsAmount} Albums, ${songsAmount} Songs`;
    return (
      <PageContainer {...{ error, loaded }}>
        <HeaderLine
          {...{
            title: 'Albums',
            subtitle,
            size: 'big'
          }}
        />
        <div className="albums-view__grid">
          <AlbumsGrid size="big" albums={albums} />
        </div>
        {next && (
          <BottomScrollListener
            onBottom={() => {
              this.loadAlbums();
            }}
          />
        )}
      </PageContainer>
    );
  };
}
