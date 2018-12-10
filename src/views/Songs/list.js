import React, { Component } from 'react';

import Grid from '../../components/Grid/grid';
import HeaderLine from '../../components/headerLine/headerLine';
import PageContainer from '../../components/PageContainer/pageContainer';
import { getSavedTracks } from '../../services/tracks';
import { savedTracks as parseSavedTracks } from '../../utils/spotifyResponseParsers';
import { getSongsComponents } from '../../utils/parseToCard';
import { serverError } from '../../services/errors';
import './songs.css';

export default class Songs extends Component {
  state = {
    tracks: [],
    total: 0
  };

  componentDidMount() {
    getSavedTracks()
      .then((rawTracks) => {
        const tracks = parseSavedTracks(rawTracks.items);
        const { total } = rawTracks;
        this.setState({ tracks, total });
      })
      .catch((error) => {
        window.alert('Sorry, we cannot complete your request right now.');
        serverError(error);
      });
  }

  render = () => {
    const { tracks, total } = this.state;
    const subtitle = `${total} Songs saved on Library`;
    return (
      <PageContainer>
        <HeaderLine
          {...{
            title: 'Tracks',
            subtitle
          }}
        />
        <Grid items={tracks} size="big" type="tracks" />
      </PageContainer>
    );
  };
}
