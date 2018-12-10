import React, { Component } from 'react';

import Popup from '../../../components/Popup/component';
import Card from '../../Card/card';
import { getAlbumTracks } from '../../../services/tracks';
import { albumTracks } from '../../../utils/spotifyResponseParsers';

const createPopup = (tracks, title, subtitle, date) => (
  <Popup tracks={tracks} title={title} subtitle={subtitle} date={date} />
);

class Album extends Component {
  state = {
    tracks: []
  };

  componentDidMount() {
    const { id } = this.props;
    getAlbumTracks(id).then((response) => {
      const tracks = albumTracks(response);
      this.setState({ tracks });
    });
  }

  render = () => {
    const { imgSrc, size, title, date, artist, id } = this.props;
    const { tracks } = this.state;
    const popup = createPopup(tracks, title, artist.name, date);
    return (
      <Card
        {...{
          imgSrc,
          size,
          title,
          subtitle: artist.name,
          subtitleHref: `/artists/${artist.id}`,
          albumId: { id },
          popup,
          date,
          hasHover: true
        }}
      />
    );
  };
}

export default Album;
