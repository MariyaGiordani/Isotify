import React, { Component } from 'react';

import Card from '../../components/Card/card';
import { PlayerContext } from '../../components/Player/musicPlayer';

class Track extends Component {
  state = {
    tracks: []
  };

  componentDidMount() {}

  render = () => {
    const { albumImage, size, songName, artist, id } = this.props;
    return (
      <PlayerContext>
        {(context) => (
          <Card
            imgSrc={albumImage}
            size={size}
            title={songName}
            subtitle={artist.name}
            subtitleHref={`/artists/${artist.id}`}
            key={id}
            id={id}
            hasHover={true}
            hoverCallback={(id) => context.onClickPlayTrack(id)}
          />
        )}
      </PlayerContext>
    );
  };
}

export default Track;
