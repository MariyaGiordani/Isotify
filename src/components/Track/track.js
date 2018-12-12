import React, { Component } from 'react';

import Card from '../../components/Card/card';
import { PlayerContext } from '../../components/Player/musicPlayer';

class Track extends Component {
  render = () => {
    const {
      albumImage: imgSrc = '',
      size,
      songName: title,
      artist,
      id
    } = this.props;
    return (
      <PlayerContext>
        {(context) => (
          <Card
            {...{
              imgSrc,
              size,
              title,
              id,
              subtitle: artist.name,
              subtitleHref: `/artists/${artist.id}`,
              key: id,
              hasHover: true,
              hoverCallback: (id) => context.onClickPlayTrack([id])
            }}
          />
        )}
      </PlayerContext>
    );
  };
}

export default Track;
