import React, { Component, Fragment } from 'react';

import Grid from '../../components/Grid/grid';
import HeaderLine from '../../components/headerLine/headerLine';
import PageContainer from '../../components/PageContainer/pageContainer';
import Track from '../../components/Track/track';
import Spinner from '../../components/Spinner/spinner';
import { getSavedTracks } from '../../services/tracks';
import { savedTracks as parseSavedTracks } from '../../utils/spotifyResponseParsers';
import { serverError } from '../../utils/errors';
import './songs.css';

export default class Songs extends Component {
  state = {
    tracks: [],
    total: 0,
    loaded: false
  };

  componentDidMount() {
    getSavedTracks()
      .then((rawTracks) => {
        const tracks = parseSavedTracks(rawTracks.items);
        const { total } = rawTracks;
        this.setState({ tracks, total, loaded: true });
      })
      .catch((error) => {
        window.alert('Sorry, we cannot complete your request right now.');
        serverError(error);
      });
  }

  render = () => {
    const { tracks, total, loaded } = this.state;
    const subtitle = `${total} Songs saved on Library`;
    const songsView = (
      <Fragment>
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
      </Fragment>
    );
    return <PageContainer>{loaded ? songsView : <Spinner />}</PageContainer>;
  };
}
