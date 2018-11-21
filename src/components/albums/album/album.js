import React, { Component } from 'react';

import Popup from '../../components/Popup/component';
import Card from '../../Card/card';
import { getAlbumTracks } from '../../services/tracks';
import { albumTracks } from '../../utils/spotifyResponseParsers';

const createPopup = (tracks, title, subtitle, date) => {
  return <Popup tracks={tracks} title={title} subtitle={subtitle} date={date} />;
};

class Album extends Component {
  state = {
    tracks: []
  };

  componentDidMount() {
    if (this.props.popup) {
      const albumId = this.props.albumId;
      getAlbumTracks(albumId).then((response) => {
        const tracks = albumTracks(response);
        this.setState({ tracks });
      });
    }
  }

  render = () => {
    const { imgSrc, size, name, date, artist, id } = this.props;

    return (
      <Card
        imgSrc={imgSrc}
        size={size}
        title={name}
        subtitle={artist.name}
        subtitleHref={`/artists/${artist.id}`}
        key={id}
        albumId={id}
        popup={createPopup(this.state.tracks, name, artist.name, date)}
        date={date}
      />
    );
  };
}

export default Album;
