import React from 'react';

import Card from './card';
import { PlayerContext } from '../Player/musicPlayer';

export default ({
  imgSrc = '',
  albums,
  totalTracks,
  size,
  name: title,
  id
}) => (
  <PlayerContext>
    {(context) => (
      <Card
        {...{
          imgSrc,
          size,
          title,
          subtitle: `${albums.length} Albums, ${totalTracks} Songs`,
          titleHref: `/artists/${id}`,
          id,
          key: id,
          hasHover: true,
          hoverCallback: (id) => context.onClickPlayArtist(id)
        }}
      />
    )}
  </PlayerContext>
);
