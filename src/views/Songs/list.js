import React, { Component } from 'react';

import Grid from '../../components/Grid/grid';
import HeaderLine from '../../components/headerLine/headerLine';
import PageContainer from '../../components/PageContainer/pageContainer';
import Track from '../../components/Track/track';
import { getSavedTracks } from '../../services/tracks';
import { savedTracks as parseSavedTracks } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../utils/errors';
import './songs.css';

export default class Songs extends Component {
  state = {
    tracks: [],
    total: 0,
    loaded: false,
    error: ''
  };

  componentDidMount() {
    getSavedTracks()
      .then((rawTracks) => {
        const tracks = parseSavedTracks(rawTracks.items);
        const { total } = rawTracks;
        this.setState({ tracks, total, loaded: true });
      })
      .catch((error) => {
        this.setState({ error: serverError(error) });
      });
  }

  render = () => {
    const { tracks, total, loaded, error } = this.state;
    const subtitle = `${total} Songs saved on Library`;

    return (
      <PageContainer {...{ error, loaded }}>
        <HeaderLine
          {...{
            title: 'Tracks',
            subtitle
          }}
        />
        <Grid size="big" type="tracks">
          {tracks.map((track) => {
            return <Track {...{ key: track.id, size: 'big', ...track }} />;
          })}
        </Grid>
      </PageContainer>
    );
  };
}
