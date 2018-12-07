import React, { Component } from 'react';

import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import PageContainer from '../../components/PageContainer/pageContainer';
import { getSavedTracks } from '../../services/albums';
import { savedTracks as parseSavedTracks } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../services/errors';
import './songs.css';

export default class Songs extends Component {
  state = {
    albums: [],
    albumsAmount: 0,
    songsAmount: 0
  };

  componentDidMount() {
    getSavedTracks()
      .then((rawAlbums) => {
        console.log(rawAlbums);
        const albums = parseSavedAlbums(rawAlbums);
        const albumsAmount = albums.length;
        const songsAmount = albums.reduce(
          (total, currentAlbum) => total + currentAlbum.songsAmount,
          0
        );
        this.setState({ albums, albumsAmount, songsAmount });
      })
      .catch((error) => {
        window.alert('Sorry, we cannot complete your request right now.');
        serverError(error);
      });
  }

  render = () => {
    const { albums, albumsAmount, songsAmount } = this.state;
    const subtitle = `${albumsAmount} Albums, ${songsAmount} Songs`;

    return (
      <PageContainer>
        <HeaderLine
          {...{
            title: 'Albums',
            subtitle
          }}
        />
        <div className="albums-view__grid">
          <AlbumsGrid size="big" albums={albums} />
        </div>
      </PageContainer>
    );
  };
}
