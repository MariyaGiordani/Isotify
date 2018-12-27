import React, { Component } from 'react';

import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import PageContainer from '../../components/PageContainer/pageContainer';
import { getSavedAlbums } from '../../services/albums';
import { savedAlbums as parseSavedAlbums } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../utils/errors';
import './albums.css';

export default class Albums extends Component {
  state = {
    albums: [],
    albumsAmount: 0,
    songsAmount: 0,
    error: '',
    loaded: false
  };

  componentDidMount() {
    getSavedAlbums()
      .then((rawAlbums) => {
        const albums = parseSavedAlbums(rawAlbums);
        const albumsAmount = albums.length;
        const songsAmount = albums.reduce(
          (total, currentAlbum) => total + currentAlbum.songsAmount,
          0
        );
        this.setState({ albums, albumsAmount, songsAmount, loaded: true });
      })
      .catch((error) => {
        this.setState({ error: serverError(error) });
      });
  }

  render = () => {
    const { albums, albumsAmount, songsAmount, error, loaded } = this.state;
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
      </PageContainer>
    );
  };
}
