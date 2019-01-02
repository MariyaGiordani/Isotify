import React, { Component } from 'react';

import HeaderLine from '../../components/headerLine/headerLine';
import PageContainer from '../../components/PageContainer/pageContainer';
import { getSavedTracks } from '../../services/tracks';
import { savedTracks as parseSavedTracks } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../utils/errors';
import BottomScrollListener from 'react-bottom-scroll-listener';
import './songs.css';
import TracksGrid from '../../components/Grid/tracksGrid';

export default class Songs extends Component {
  state = {
    tracks: [],
    total: 0,
    loaded: false,
    error: '',
    next: ''
  };

  componentDidMount() {
    this.loadTracks();
  }

  loadTracks = () => {
    const { tracks, next } = this.state;
    getSavedTracks(next)
      .then((rawTracks) => {
        const newTracks = parseSavedTracks(rawTracks.items);
        const { total, next } = rawTracks;
        this.setState({
          tracks: tracks.concat(newTracks),
          total,
          next,
          loaded: true
        });
      })
      .catch((error) => {
        this.setState({ error: serverError(error) });
      });
  };

  render = () => {
    const { tracks, total, loaded, error, next } = this.state;
    const subtitle = `${total} Songs saved on Library`;

    return (
      <PageContainer {...{ error, loaded }}>
        <HeaderLine
          {...{
            title: 'Songs',
            subtitle,
            size: 'big'
          }}
        />
        <TracksGrid {...{ tracks, size: 'big' }} />
        {next && (
          <BottomScrollListener
            onBottom={() => {
              this.loadTracks();
            }}
          />
        )}
      </PageContainer>
    );
  };
}
