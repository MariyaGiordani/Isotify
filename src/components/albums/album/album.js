import React, { Component } from 'react';

import Popup from '../../../components/Popup/component';
import Card from '../../Card/card';
import { getAlbumTracks } from '../../../services/tracks';
import { albumTracks } from '../../../utils/spotifyResponseParsers';
import { PlayerContext } from '../../../components/Player/musicPlayer';

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
      <PlayerContext>
        {(context) => (
          <Card
            {...{
              imgSrc,
              size,
              title,
              subtitle: artist.name,
              subtitleHref: `/artists/${artist.id}`,
              popup,
              date,
              hasHover: true,
              key: id,
              id: id,
              hoverCallback: () => context.onClickPlayAlbum(id, popup)
            }}
          />
        )}
      </PlayerContext>
    );
  };
}

export default Album;
