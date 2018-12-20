import React from 'react';

import Card from '../../components/Card/card';
import { PlayerContext } from '../../components/Player/musicPlayer';

export default ({
  albumImage: imgSrc = '',
  size,
  songName: title,
  artist,
  id
}) => (
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
